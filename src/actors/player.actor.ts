import {
  Actor,
  Animation,
  Collider,
  CollisionContact,
  CollisionType,
  Engine,
  Input,
  Side,
  SpriteSheet,
  range,
  vec,
} from "excalibur";
import { assetManager } from "../managers/asset.manager";
import { eventBus, gameManager } from "../managers/game.manager";
import {
  ACTOR_TYPE,
  PLAYER_STATE,
  SCENE_EVENTS,
  SCENE_STATE,
  PLAYER_TOOLS,
  WEAPON_TYPE,
  ATTACK_TYPE,
} from "../models";

import { uiManager } from "../managers/ui.manager";
import { SceneArea } from "./Areas/scene-area.actor";
import { hudManager } from "../managers/hud.manager";
import { combatManager } from "../managers/combat.manager";
import { floatingHealthBarManager } from "../managers/floating-health-bar.manager";
import { animationIntegrationSystem } from "../systems/animation-integration.system";
// import { attackAnimationSystem } from "../systems/attack-animation.system"; // TODO: Phase 2

const ANIM = {
  IDLE_FRONT: "IDLE_FRONT",
  IDLE_LEFT: "IDLE_LEFT",
  IDLE_RIGHT: "IDLE_RIGHT",
  IDLE_BACK: "IDLE_BACK",
  WALK_FRONT: "WALK_IDLE",
  WALK_BACK: "WALK_BACK",
  WALK_LEFT: "WALK_LEFT",
  WALK_RIGHT: "WALK_RIGHT",
  SHOVEL_FRONT: "SHOVEL_FRONT",
  SHOVEL_BACK: "SHOVEL_BACK",
  PICKAXE_LEFT: "PICKAXE_LEFT",
  PICKAXE_RIGHT: "PICKAXE_RIGHT",
  AXE_FRONT: "AXE_FRONT",
  AXE_BACK: "AXE_BACK",
  AXE_LEFT: "AXE_LEFT",
  AXE_RIGHT: "AXE_RIGHT",
  WATERING_CAN_FRONT: "WATERING_CAN_FRONT",
  WATERING_CAN_BACK: "WATERING_CAN_BACK",
  WATERING_CAN_LEFT: "WATERING_CAN_LEFT",
  WATERING_CAN_RIGHT: "WATERING_CAN_RIGHT",
};

function get_animations() {
  // sprites
  const sprite_movements = SpriteSheet.fromImageSource({
    image: assetManager.images.character,
    grid: {
      rows: 4,
      columns: 4,
      spriteWidth: 48,
      spriteHeight: 48,
    },
  });
  const sprite_actions = SpriteSheet.fromImageSource({
    image: assetManager.images.character_actions,
    grid: {
      rows: 12,
      columns: 2,
      spriteWidth: 48,
      spriteHeight: 48,
    },
  });
  const anim_idle_front = Animation.fromSpriteSheet(
    sprite_movements,
    range(0, 1),
    400
  );
  const anim_idle_back = Animation.fromSpriteSheet(
    sprite_movements,
    range(4, 5),
    400
  );
  const anim_idle_left = Animation.fromSpriteSheet(
    sprite_movements,
    range(8, 9),
    400
  );
  const anim_idle_right = Animation.fromSpriteSheet(
    sprite_movements,
    range(12, 13),
    400
  );

  // movements
  const anim_walk_front = Animation.fromSpriteSheet(
    sprite_movements,
    range(0, 3),
    200
  );
  const anim_walk_back = Animation.fromSpriteSheet(
    sprite_movements,
    range(4, 7),
    200
  );
  const anim_walk_left = Animation.fromSpriteSheet(
    sprite_movements,
    range(8, 11),
    200
  );
  const anim_walk_right = Animation.fromSpriteSheet(
    sprite_movements,
    range(12, 15),
    200
  );
  //shovel
  const anim_shovel_front = Animation.fromSpriteSheet(
    sprite_actions,
    range(0, 1),
    300
  );
  const anim_shovel_back = Animation.fromSpriteSheet(
    sprite_actions,
    range(2, 3),
    300
  );
  // pickaxe
  const anim_pickaxe_left = Animation.fromSpriteSheet(
    sprite_actions,
    range(4, 5),
    300
  );
  const anim_pickaxe_right = Animation.fromSpriteSheet(
    sprite_actions,
    range(6, 7),
    300
  );
  //axe
  const anim_axe_front = Animation.fromSpriteSheet(
    sprite_actions,
    range(8, 9),
    300
  );
  const anim_axe_back = Animation.fromSpriteSheet(
    sprite_actions,
    range(10, 11),
    300
  );
  const anim_axe_left = Animation.fromSpriteSheet(
    sprite_actions,
    range(12, 13),
    300
  );
  const anim_axe_right = Animation.fromSpriteSheet(
    sprite_actions,
    range(14, 15),
    300
  );
  // watering
  const anim_watering_can_front = Animation.fromSpriteSheet(
    sprite_actions,
    range(16, 17),
    300
  );
  const anim_watering_can_back = Animation.fromSpriteSheet(
    sprite_actions,
    range(18, 19),
    300
  );
  const anim_watering_can_left = Animation.fromSpriteSheet(
    sprite_actions,
    range(20, 21),
    300
  );
  const anim_watering_can_right = Animation.fromSpriteSheet(
    sprite_actions,
    range(22, 23),
    300
  );

  return {
    anim_idle_front,
    anim_idle_back,
    anim_idle_left,
    anim_idle_right,
    //
    anim_walk_front,
    anim_walk_back,
    anim_walk_left,
    anim_walk_right,
    //
    anim_shovel_front,
    anim_shovel_back,
    //
    anim_pickaxe_left,
    anim_pickaxe_right,
    //
    anim_axe_front,
    anim_axe_back,
    anim_axe_left,
    anim_axe_right,
    //
    anim_watering_can_front,
    anim_watering_can_back,
    anim_watering_can_left,
    anim_watering_can_right,
  };
}

enum FACING {
  FRONT = "FRONT",
  BACK = "BACK",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}
export class Player extends Actor {
  current_anim: any;
  private facing!: FACING;
  private map_bounds: any;
  public in_action = false;
  public nearToNPC: any;
  public current_tool =
    "axe" || "wateringcan" || "axe" || "pickaxe" || "shovel" || "";

  public player_state!: PLAYER_STATE;
  
  // Stats du joueur
  public hp = { current: 100, max: 100 };
  public mp = { current: 50, max: 50 };
  public energy = { current: 75, max: 100 };
  public level = 1;
  public playerName = "Player";

  // Combat properties
  public currentWeapon: WEAPON_TYPE = WEAPON_TYPE.FISTS;
  public isAttacking: boolean = false;

  constructor({ x, y, map_bounds }: any) {
    super({
      name: "Player",
      x,
      y,
      z: 5,
      width: 16,
      height: 16,
      collisionType: CollisionType.Active,
    });
    this.facing = FACING.FRONT;
    this.scale = vec(0.8, 0.8);
    this.map_bounds = map_bounds;
    this.current_tool = "wateringcan";
    this.set_state(PLAYER_STATE.IDLE);
    this.scale = vec(0.8, 0.8);
  }

  onInitialize(): void {
    this.set_animations();
    this.set_anim(ANIM.IDLE_FRONT);
    
    // Initialiser le HUD avec les stats du joueur
    this.updateHUD();
    
    // Register player as combat participant
    combatManager.registerCombatant(this, this.hp.current, this.hp.max, 0);
    
    // Initialize floating health bar system
    floatingHealthBarManager.initialize();
    
    // Set camera reference for floating health bars (will be set by scene)
    // floatingHealthBarManager.setCamera(this.scene?.camera);
  }
  
  // Méthode pour mettre à jour le HUD
  private updateHUD() {
    hudManager.updatePlayerStats({
      hp: { current: this.hp.current, max: this.hp.max },
      mp: { current: this.mp.current, max: this.mp.max },
      energy: { current: this.energy.current, max: this.energy.max },
      level: this.level,
      name: this.playerName,
      portraitSrc: "/assets/characters/portrait/default-portrait.png"
    });
    
    // Ensure HUD is visible when playing
    hudManager.showHUD();
  }

  // Méthodes pour modifier les stats
  public modifyHP(amount: number) {
    this.hp.current = Math.max(0, Math.min(this.hp.current + amount, this.hp.max));
    hudManager.updatePlayerStats({
      hp: { current: this.hp.current, max: this.hp.max }
    });
  }

  public modifyMP(amount: number) {
    this.mp.current = Math.max(0, Math.min(this.mp.current + amount, this.mp.max));
    hudManager.updatePlayerStats({
      mp: { current: this.mp.current, max: this.mp.max }
    });
  }

  public modifyEnergy(amount: number) {
    this.energy.current = Math.max(0, Math.min(this.energy.current + amount, this.energy.max));
    hudManager.updatePlayerStats({
      energy: { current: this.energy.current, max: this.energy.max }
    });
  }

  public levelUp() {
    this.level++;
    hudManager.updatePlayerStats({
      level: this.level
    });
  }

  onPreUpdate(engine: Engine): void {
    const keyboard = engine.input.keyboard;
    
    // For Phase 1, we'll focus on keyboard input (X key) for attacks
    // Left-click functionality will be implemented properly in Phase 2
    // when we have proper pointer event handling

    const pressed_space = keyboard.wasPressed(Input.Keys.Space);
    const pressed_escape = keyboard.wasPressed(Input.Keys.Esc);
    // const pressed_enter = keyboard.wasReleased(Input.Keys.Enter);
    const pressed_menu = keyboard.wasReleased(Input.Keys.M);
    const released_change_tool =
      keyboard.wasReleased(Input.Keys.E) ||
      keyboard.wasReleased(Input.Keys.T) ||
      keyboard.wasReleased(Input.Keys.F);

    // Combat input handling - Phase 1: X key only (left-click in Phase 2)
    const attack_pressed = keyboard.wasPressed(Input.Keys.X); // X key attack

    // Touches de test pour le HUD (à supprimer en production)
    if (keyboard.wasPressed(Input.Keys.Digit1)) {
      this.modifyHP(-10); // Perdre 10 HP
    }
    if (keyboard.wasPressed(Input.Keys.Digit2)) {
      this.modifyHP(10); // Gagner 10 HP
    }
    if (keyboard.wasPressed(Input.Keys.Digit3)) {
      this.modifyMP(-5); // Perdre 5 MP
    }
    if (keyboard.wasPressed(Input.Keys.Digit4)) {
      this.modifyMP(5); // Gagner 5 MP
    }
    if (keyboard.wasPressed(Input.Keys.Digit5)) {
      this.levelUp(); // Level up
    }
    if (keyboard.wasPressed(Input.Keys.H)) {
      hudManager.toggleHUD(); // Toggle HUD visibility
    }

    this.vel.x = 0;
    this.vel.y = 0;

    switch (this.player_state) {
      case PLAYER_STATE.TALKING:
        if (pressed_space) {
          gameManager.continue_talking();
        }
        break;
      case PLAYER_STATE.IDLE:
        // Attack input handling - check for attack before other actions
        if (attack_pressed && !this.isAttacking) {
          this.performAttack();
          break; // Exit early to prevent other actions during attack
        }

        if (pressed_space) {
          if (this.nearToNPC) {
            this.set_state(PLAYER_STATE.TALKING);
            gameManager.start_talk(this.nearToNPC);
            return;
          }

          // const prev_anim = this.current_anim;

          // this.in_action = true;
          // switch (this.current_tool) {
          //   case 'axe':
          //     switch (this.facing) {
          //       case FACING.BACK:
          //         this.set_anim(ANIM.AXE_BACK);
          //         break;
          //       case FACING.FRONT:
          //         this.set_anim(ANIM.AXE_FRONT);
          //         break;
          //       case FACING.LEFT:
          //         this.set_anim(ANIM.AXE_LEFT);
          //         break;
          //       case FACING.RIGHT:
          //         this.set_anim(ANIM.AXE_RIGHT);
          //         break;
          //     }
          //     setTimeout(() => {
          //       this.set_anim(prev_anim);
          //       this.in_action = false;
          //     }, 300 * 4);
          //     break;
          //   case 'wateringcan':
          //     switch (this.facing) {
          //       case FACING.BACK:
          //         this.set_anim(ANIM.WATERING_CAN_BACK);
          //         break;
          //       case FACING.FRONT:
          //         this.set_anim(ANIM.WATERING_CAN_FRONT);
          //         break;
          //       case FACING.LEFT:
          //         this.set_anim(ANIM.WATERING_CAN_LEFT);
          //         break;
          //       case FACING.RIGHT:
          //         this.set_anim(ANIM.WATERING_CAN_RIGHT);
          //         break;
          //     }
          //     setTimeout(() => {
          //       this.set_anim(prev_anim);
          //       this.in_action = false;
          //     }, 300 * 4);
          //     break;
          // }
        }

        if (pressed_menu) {
          this.set_state(PLAYER_STATE.MENU);
          gameManager.scene_state.next(SCENE_STATE.MENU);
          return;
        }

        this.update_movement(engine);

        if (released_change_tool) {
          let nextIndex = PLAYER_TOOLS.indexOf(this.current_tool) + 1;
          if (!PLAYER_TOOLS[nextIndex]) {
            nextIndex = 0;
          }
          const next = PLAYER_TOOLS[nextIndex];
          this.current_tool = next;
          eventBus.emit(SCENE_EVENTS.SWITCH_TOOL, this.current_tool);
        }
        break;
      case PLAYER_STATE.MENU:
        if (pressed_escape) {
          uiManager.cancel_menu();
          return;
        }
        if (pressed_menu) {
          this.set_state(PLAYER_STATE.IDLE);
          gameManager.scene_state.next(SCENE_STATE.PLAYING);
          return;
        }

        if (pressed_space) {
          uiManager.open_submenu();
          return;
        }

        // const isLEFT =
        //   keyboard.wasReleased(Input.Keys.Left) ||
        //   keyboard.wasReleased(Input.Keys.A);
        // const isRIGHT =
        //   keyboard.wasReleased(Input.Keys.Right) ||
        //   keyboard.wasReleased(Input.Keys.D);
        const isUP =
          keyboard.wasReleased(Input.Keys.Up) ||
          keyboard.wasReleased(Input.Keys.W);
        const isDOWN =
          keyboard.wasReleased(Input.Keys.Down) ||
          keyboard.wasReleased(Input.Keys.S);

        if (isUP) {
          uiManager.menu_item_up();
        } else if (isDOWN) {
          uiManager.menu_item_down();
        }

        break;
      case PLAYER_STATE.IN_ACTION:
        this.vel.x = 0;
        this.vel.y = 0;

        break;
    }
  }
  // COLLISIONS
  onPreCollisionResolve(
    _self: Collider,
    _other: Collider,
    _side: Side,
    _contact: CollisionContact
  ): void {
    const other: any = _other;
    switch (other.owner.name) {
      case ACTOR_TYPE.SCENE_NEXT:
        const area: SceneArea | any = other.owner;
        if (area.activated) {
          area.activated = false;
          gameManager.go_to(area.toScene);
        }
        break;
      case ACTOR_TYPE.NPC:
        this.nearToNPC = other.owner;
        break;
    }
  }
  onCollisionEnd(_self: Collider, other: Collider): void {
    switch (other.owner.name) {
      case ACTOR_TYPE.SCENE_NEXT:
        const area: SceneArea | any = other.owner;
        area.activated = true;
        break;
    }
  }

  //
  public set_anim(new_anim: any) {
    this.current_anim = new_anim;
    this.graphics.use(new_anim);
  }
  private set_animations() {
    const animations = get_animations();
    this.graphics.add(ANIM.IDLE_FRONT, animations.anim_idle_front);
    this.graphics.add(ANIM.IDLE_BACK, animations.anim_idle_back);
    this.graphics.add(ANIM.IDLE_LEFT, animations.anim_idle_left);
    this.graphics.add(ANIM.IDLE_RIGHT, animations.anim_idle_right);
    // movements
    this.graphics.add(ANIM.WALK_FRONT, animations.anim_walk_front);
    this.graphics.add(ANIM.WALK_BACK, animations.anim_walk_back);
    this.graphics.add(ANIM.WALK_LEFT, animations.anim_walk_left);
    this.graphics.add(ANIM.WALK_RIGHT, animations.anim_walk_right);
    // shovel
    this.graphics.add(ANIM.SHOVEL_FRONT, animations.anim_shovel_front);
    this.graphics.add(ANIM.SHOVEL_BACK, animations.anim_shovel_back);
    // pickaxe
    this.graphics.add(ANIM.PICKAXE_LEFT, animations.anim_pickaxe_left);
    this.graphics.add(ANIM.PICKAXE_RIGHT, animations.anim_pickaxe_right);
    // axe
    this.graphics.add(ANIM.AXE_FRONT, animations.anim_axe_front);
    this.graphics.add(ANIM.AXE_BACK, animations.anim_axe_back);
    this.graphics.add(ANIM.AXE_LEFT, animations.anim_axe_left);
    this.graphics.add(ANIM.AXE_RIGHT, animations.anim_axe_right);
    // watering can
    this.graphics.add(
      ANIM.WATERING_CAN_FRONT,
      animations.anim_watering_can_front
    );
    this.graphics.add(
      ANIM.WATERING_CAN_BACK,
      animations.anim_watering_can_back
    );
    this.graphics.add(
      ANIM.WATERING_CAN_LEFT,
      animations.anim_watering_can_left
    );
    this.graphics.add(
      ANIM.WATERING_CAN_RIGHT,
      animations.anim_watering_can_right
    );
  }
  private update_movement(engine: Engine) {
    const keyboard = engine.input.keyboard;
    const WALKING_SPEED = 100; // 160
    const isLEFT =
      keyboard.isHeld(Input.Keys.Left) || keyboard.isHeld(Input.Keys.A);
    const isRIGHT =
      keyboard.isHeld(Input.Keys.Right) || keyboard.isHeld(Input.Keys.D);
    const isUP =
      keyboard.isHeld(Input.Keys.Up) || keyboard.isHeld(Input.Keys.W);
    const isDOWN =
      keyboard.isHeld(Input.Keys.Down) || keyboard.isHeld(Input.Keys.S);
    const hit_bounds = {
      left: this.pos.x < 0 + this.width / 2,
      top: this.pos.y < 0 + this.height / 2,
      right: this.pos.x > this.map_bounds.right - this.width / 2,
      bottom: this.pos.y > this.map_bounds.bottom - this.height / 2,
    };
    this.vel.x = 0;
    this.vel.y = 0;
    if (isLEFT && !hit_bounds.left) {
      this.vel.x = -1;
      this.facing = FACING.LEFT;
    }
    if (isRIGHT && !hit_bounds.right) {
      this.vel.x = 1;
      this.facing = FACING.RIGHT;
    }
    if (isUP && !hit_bounds.top) {
      this.vel.y = -1;
      this.facing = FACING.BACK;
    }
    if (isDOWN && !hit_bounds.bottom) {
      this.vel.y = 1;
      this.facing = FACING.FRONT;
    }

    // Normalize walking speed
    if (this.vel.x !== 0 || this.vel.y !== 0) {
      this.nearToNPC = false;
      this.vel = this.vel.normalize();
      this.vel.x = this.vel.x * WALKING_SPEED;
      this.vel.y = this.vel.y * WALKING_SPEED;
      
      // Consommation d'énergie lors du mouvement (très lente)
      if (Math.random() < 0.01) { // 1% de chance par frame de perdre de l'énergie
        this.modifyEnergy(-1);
      }
      
      switch (this.facing) {
        case FACING.LEFT:
          this.graphics.use(ANIM.WALK_LEFT);
          break;
        case FACING.RIGHT:
          this.graphics.use(ANIM.WALK_RIGHT);
          break;
        case FACING.FRONT:
          this.graphics.use(ANIM.WALK_FRONT);
          break;
        case FACING.BACK:
          this.graphics.use(ANIM.WALK_BACK);
          break;
      }
    } else {
      // Régénération lente d'énergie quand on ne bouge pas
      if (Math.random() < 0.005) { // 0.5% de chance par frame de récupérer de l'énergie
        this.modifyEnergy(1);
      }
      
      switch (this.facing) {
        case FACING.LEFT:
          this.graphics.use(ANIM.IDLE_LEFT);
          break;
        case FACING.RIGHT:
          this.graphics.use(ANIM.IDLE_RIGHT);
          break;
        case FACING.FRONT:
          this.graphics.use(ANIM.IDLE_FRONT);
          break;
        case FACING.BACK:
          this.graphics.use(ANIM.IDLE_BACK);
          break;
      }
    }
  }

  set_state(new_state: PLAYER_STATE) {
    this.player_state = new_state;
    gameManager.player = this;
  }

  /**
   * Perform attack action with current weapon
   * Phase 1.5 implementation - with animation integration system
   */
  private async performAttack(): Promise<void> {
    if (this.isAttacking) return;

    console.log(`Player: Starting attack with ${this.currentWeapon}`);
    this.isAttacking = true;
    this.set_state(PLAYER_STATE.ATTACKING);

    try {
      // Find nearby enemies within attack range
      const nearbyEnemies = this.findNearbyEnemies();
      const target = nearbyEnemies.length > 0 ? nearbyEnemies[0] : null;
      
      if (target) {
        console.log(`Player: Attacking ${target.name}`);
      } else {
        console.log(`Player: No enemies in range - attacking air`);
      }
      
      // Use animation integration system for clean attack execution
      const success = await animationIntegrationSystem.executeAttack(
        this,
        target,
        this.currentWeapon,
        this.getFacingDirection()
      );
      
      if (success) {
        console.log(`Player: Attack successful${target ? ` against ${target.name}` : ' (air swing)'}`);
      } else {
        console.log(`Player: Attack failed${target ? ` against ${target.name}` : ' (air swing)'}`);
      }
      
    } catch (error) {
      console.error(`Player: Attack error:`, error);
    } finally {
      this.isAttacking = false;
      this.set_state(PLAYER_STATE.IDLE);
      console.log(`Player: Attack completed`);
    }
  }

  /**
   * Get current facing direction as string for attack system
   */
  private getFacingDirection(): 'front' | 'back' | 'left' | 'right' {
    switch (this.facing) {
      case FACING.FRONT: return 'front';
      case FACING.BACK: return 'back';
      case FACING.LEFT: return 'left';
      case FACING.RIGHT: return 'right';
      default: return 'front';
    }
  }

  /**
   * Find nearby enemies within attack range
   * Phase 1 implementation - basic enemy detection
   */
  private findNearbyEnemies(): Actor[] {
    const attackRange = 32; // Basic attack range
    const nearbyEnemies: Actor[] = [];
    
    // Get the current scene and check for NPCs
    const currentScene = gameManager.game.currentScene;
    if (!currentScene) return nearbyEnemies;

    // Find all actors in the scene that could be enemies
    const allActors = currentScene.actors;
    
    for (const actor of allActors) {
      // Check if it's an NPC and within range
      if (actor.name && actor.name !== 'Player' && actor !== this) {
        const distance = this.pos.distance(actor.pos);
        if (distance <= attackRange) {
          // Check if it's a hostile NPC (for now, consider Orcs as enemies)
          if (actor.name === 'Orc') {
            nearbyEnemies.push(actor);
            console.log(`Player: Found enemy ${actor.name} at distance ${distance.toFixed(1)}`);
          }
        }
      }
    }
    
    return nearbyEnemies;
  }
}
