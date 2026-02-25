import { config } from '@tamagui/config/v3'
import { createTamagui } from 'tamagui'

const tamaguiConfig = createTamagui(config as any)

type Conf = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

export default tamaguiConfig
