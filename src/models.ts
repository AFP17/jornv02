export enum PLAYER_TOOLS {
  WATERING_CAN = "wateringcan",
  AXE = "axe",
  SHOVEL = "shovel",
  PICKAXE = "pickaxe",
}
export enum NPC_TYPE {
  COW = "COW",
  CHICKEN = "CHICKEN",
  GUARD = "GUARD",
  ORC = "ORC",
}
export enum PLAYER_STATE {
  IDLE = "IDLE",
  TALKING = "TALKING",
  IN_ACTION = "IN_ACTION",
  ATTACKING = "ATTACKING",
  MENU = "MENU",
}
export enum GAME_STATES {
  LOADING = "LOADING",
  READY = "READY",
  PLAYING = "PLAYING",
  COMPLETED = "COMPLETED",
  ERROR = "ERROR",
}
export enum MENU {
  COLLECTIVES = "COLLECTIVES",
  ITEMS = "ITEMS",
  MAP = "MAP",
  SETTINGS = "SETTINGS",
  BACK_MAIN_MENU = "BACK_MAIN_MENU",
  EXIT = "EXIT",
}
export enum SCENE_STATE {
  LOADING = "SCENE_STATE__LOADING",
  READY = "SCENE_STATE__READY",
  PLAYING = "SCENE_STATE__PLAYING",
  TALKING = "SCENE_STATE_TALKING",
  MENU = "SCENE_STATE_MENU",
  PAUSED = "SCENE_STATE__PAUSED",
  COMPLETED = "SCENE_STATE__COMPLETED",
  GAMEOVER = "SCENE_STATE__GAMEOVER",
  ERROR = "SCENE_STATE__ERROR",
}
export enum SCENE_EVENTS {
  SWITCH_TOOL = "GAME_EVENTS__SWITCH_TOOL",
  CHANGE_SCENE = "GAME_EVENTS__CHANGE_SCENE",
}

export enum TILED_LAYERS {
  WATER = "water",
  GROUND = "GROUND",
}
export enum ACTOR_TYPE {
  NPC = "NPC",
  SCENE_NEXT = "SCENE_NEXT",
}
export enum TILED_OBJECT {
  CHICKEN = "chickens",
  COW = "cows",
  SCENE_AREA = "scene_area",
  PLAYER = "player",
  GUARD = "guard",
  ORCS = "orcs",
}

export enum TILED_OBJECT_PROPS {
  SCENE = "scene",
  DIALOG_ID = "dialog_id",
  BEHAVIOR = "behavior",
  LEVEL = "level",
  NAME = "name",
}

export enum MAPS {
  MAIN_MENU = "main_menu",
  FARM = "farm",
  TOWN = "town",
  PORT = "port",
  FOREST = "forest",
  INDOOR_PLAYER_HOUSE = "indoor_player_house",
  INDOOR_FIXED_HOUSE = "indoor_fixed_house",
  INDOOR_WORKOHOLIC_HOUSE = "indoor_workoholic_house",
  MY_OWN_LEVEL = "my_own_level",
}

export enum SONGS {
  APPLE_CIDER = "apple_cider",
  SHEPPERD_DOG = "shepperd_dog",
}

export enum LANGUAGES {
  ENGLISH = "en",
  SPANISH = "es",
}

export enum WEAPON_TYPE {
  SWORD = "SWORD",
  BOW = "BOW",
  STAFF = "STAFF",
  FISTS = "FISTS",
}

export enum ATTACK_TYPE {
  MELEE = "MELEE",
  RANGED = "RANGED",
  MAGIC = "MAGIC",
}

export enum COMBAT_EVENT {
  ATTACK_START = "COMBAT_EVENT__ATTACK_START",
  ATTACK_HIT = "COMBAT_EVENT__ATTACK_HIT",
  ATTACK_END = "COMBAT_EVENT__ATTACK_END",
  DAMAGE_DEALT = "COMBAT_EVENT__DAMAGE_DEALT",
  HEALTH_CHANGED = "COMBAT_EVENT__HEALTH_CHANGED",
}

export enum NPC_BEHAVIOR {
  AGGRESSIVE = "aggressive",
  PASSIVE = "passive", 
  DEFENSIVE = "defensive",
  SAVAGE = "savage",
  LOGIC = "logic",
}
