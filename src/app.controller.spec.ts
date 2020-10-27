import { Test, TestingModule } from '@nestjs/testing'

import { AppController } from '@src/app.controller'
import { AppService } from '@src/app.service'

describe('AppController', () => {
  let appController: AppController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService]
    }).compile()

    appController = app.get<AppController>(AppController)
  })

  describe('Testing ➡️ @Get ➡️ AppController.getHello', () => {
    it('getHello() method should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!')
    })
  })
})
