import {
    Game,
    GameTime,
    GraphicsDeviceManager,
    Color,
    Vector2,
    Rectangle
} from './lib/framework'
import { ContentManager } from './lib/framework/content'
import { Texture2D, SpriteBatch } from './lib/framework/graphics'
import { Mouse, Keyboard, Keys } from './lib/framework/input'

export class Game1 extends Game {
    graphics: GraphicsDeviceManager;
    content: ContentManager;

    texture: Texture2D;
    position = Vector2.zero;
    rectangle = new Rectangle(0, 0, 40, 40);
    spriteBatch: SpriteBatch;
    speed: Vector2 = new Vector2(50, 50);
    rotation = 0;

    constructor() {
        super()
        // this.isMouseVisible = true
        this.graphics = new GraphicsDeviceManager(this)
        this.content = new ContentManager(this.graphics.graphicsDevice)
        this.spriteBatch = new SpriteBatch(this.graphics.graphicsDevice)
        this.texture = this.content.load('ball.svg')
        //this.texture = this.content.load('train.gif')
    }

    protected initialize() {
        super.initialize()
    }

    protected async loadGraphicsContent(loadAllContent: boolean) {
        if (loadAllContent) {
            await this.content.loadAll()
        }
        super.loadGraphicsContent(loadAllContent)
    }

    protected update(gameTime: GameTime) {
        const keyboardState = Keyboard.getState()
        const mouseState = Mouse.getState()
        this.rectangle.x += this.speed.x * gameTime.elapsedGameTime / 1000
        this.rectangle.y += this.speed.y * gameTime.elapsedGameTime / 1000
        if (this.rectangle.x > this.graphics.graphicsDevice.viewport.width - this.rectangle.width) {
            this.speed.x *= -1
            this.rectangle.x = this.graphics.graphicsDevice.viewport.width - this.rectangle.width
        }
        else if (this.rectangle.x < 0) {
            this.speed.x *= -1
            this.rectangle.x = 0
        }
        if (this.rectangle.y > this.graphics.graphicsDevice.viewport.height - this.rectangle.height) {
            this.speed.y *= -1
            this.rectangle.y = this.graphics.graphicsDevice.viewport.height - this.rectangle.height
        }
        else if (this.rectangle.y < 0) {
            this.speed.y *= -1
            this.rectangle.y = 0
        }
        this.rotation = (this.rotation + gameTime.elapsedGameTime * .5) % 360
        // if (keyboardState.isKeyDown(Keys.Up)) {
        //     this.rectangle.y -= 1
        // }
        // if (keyboardState.isKeyDown(Keys.Left)) {
        //     this.rectangle.x -= 1
        // }
        // if (keyboardState.isKeyDown(Keys.Down)) {
        //     this.rectangle.y += 1
        // }
        // if (keyboardState.isKeyDown(Keys.Right)) {
        //     this.rectangle.x += 1
        // }
        super.update(gameTime)
    }

    protected draw(gameTime: GameTime) {
        this.graphics.graphicsDevice.clear(Color.cornflowerBlue)
        this.spriteBatch.begin()
        this.spriteBatch.draw(
            this.texture,
            this.rectangle,
            null,
            Color.white,
            this.rotation,
            new Vector2(this.rectangle.width * .5, this.rectangle.height * .5),
            //1,
        )
        this.spriteBatch.end()
        super.draw(gameTime)
    }
}
