import type { FlintBundle } from '@oogaboogagames/flint';

export type CavemanPackage = {
    id: string
    bundle: FlintBundle
}

export type CavemanContext = {
    packages: CavemanPackage[]
}