import { ImageFiltering, ImageSource, Loader, Sound } from "excalibur";
import { TiledMapResource } from "@excaliburjs/plugin-tiled";

class AssetManager {
  loader!: Loader;
  images!: any;
  sounds!: any;
  maps!: any;

  init() {
    this.loader = new Loader();
    // this.loader.suppressPlayButton = true;
    this.setup_images();
    this.setup_sounds();
    this.setup_maps();
  }

  private setup_images() {
    this.images = {
      character: new ImageSource(
        "/assets/characters/Basic Charakter Spritesheet.png",
        false,
        ImageFiltering.Pixel
      ),
      character_actions: new ImageSource(
        "/assets/characters/Basic Charakter Actions.png",
        false,
        ImageFiltering.Pixel
      ),
      chicken: new ImageSource(
        "/assets/characters/Free Chicken Sprites.png",
        false,
        ImageFiltering.Pixel
      ),
      cow: new ImageSource(
        "/assets/characters/Free Cow Sprites.png",
        false,
        ImageFiltering.Pixel
      ),
      orc: new ImageSource(
        "/assets/characters/Orc Character Spritesheet.png",
        false,
        ImageFiltering.Pixel
      ),
    };
    for (const key in this.images) {
      this.loader.addResource(this.images[key]);
    }
  }
  private setup_sounds() {
    this.sounds = {
      apple_cider: new Sound("/assets/music/apple_cider.Zane Little Music.ogg"),
      shepperd_dog: new Sound(
        "/assets/music/shepherd_dog.Zane Little Music.wav"
      ),
    };

    for (const key in this.sounds) {
      const sound = this.sounds[key];
      this.loader.addResource(sound);
      sound.volume = 0.1;
    }
  }
  private setup_maps() {
    this.maps = {
      main_menu: new TiledMapResource("/maps/main_menu.tmx"),
      farm: new TiledMapResource("/maps/farm.tmx"),
      indoor_player_house: new TiledMapResource(
        "/maps/indoor_player_house.tmx"
      ),
      indoor_fixed_house: new TiledMapResource("/maps/indoor_fixed_house.tmx"),
      indoor_workoholic_house: new TiledMapResource(
        "/maps/indoor_workoholic_house.tmx"
      ),
      town: new TiledMapResource("/maps/town.tmx"),
      forest: new TiledMapResource("/maps/forest.tmx"),
      port: new TiledMapResource("/maps/port.tmx"),
      my_own_level: new TiledMapResource("/maps/tutorial_02.tmx"),
    };
    for (const key in this.maps) {
      this.loader.addResource(this.maps[key]);
    }
  }
}

export const assetManager = new AssetManager();
