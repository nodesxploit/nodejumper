import { Chain } from "../model/chain";

export const CHAINS: Chain[] = [
  new Chain({
    id: "rizon",
    chainName: "Rizon",
    chainId: "titan-1",
    logo: "rizon.svg",
    snapshotServer: "https://snapshots1.nodejumper.io",
    rpcServer: "https://rizon.nodejumper.io",
    rpcPeer: "0d51e8b9eb24f412dffc855c7bd854a8ecb3dff5@rizon.nodejumper.io:26656",
    binaryName: "rizond",
    homeDirectoryName: ".rizon",
    twitter: "https://twitter.com/hdac_rizon",
    github: "https://github.com/rizon-world",
    globe: "https://rizon.world",
    medium: "https://medium.com/hdac",
    discord: "https://discord.gg/Vgbcu5Hhmz",
    blockExplorer: "https://www.mintscan.io/rizon",
    validatorUrl: "https://restake.app/rizon/rizonvaloper1hy3em3nfngyntk7tre9d0626mj9swhu9ughurh/delegate",
    denomName: "uatolo",
    denomPow: 6,
    githubRepoName: 'rizon',
    isSummaryEnabled: true
  }),
  new Chain({
    id: "bitcanna",
    chainName: "Bitcanna",
    chainId: "bitcanna-1",
    logo: "bitcanna.svg",
    snapshotServer: "https://snapshots1.nodejumper.io",
    rpcServer: "https://bitcanna.nodejumper.io",
    rpcPeer: "45589e6147e36dda9e429668484d7614fb25b142@bitcanna.nodejumper.io:27656",
    binaryName: "bcnad",
    homeDirectoryName: ".bcna",
    twitter: "https://twitter.com/BitCannaGlobal",
    github: "https://github.com/BitCannaGlobal",
    globe: "https://www.bitcanna.io",
    medium: "https://medium.com/@bitcannaglobal",
    discord: "https://discord.gg/GaubcRyg3t",
    blockExplorer: "https://www.mintscan.io/bitcanna",
    validatorUrl: "https://restake.app/bitcanna/bcnavaloper1nlyurpgk5zcg6f6dcpdt2mq9khv27ajg4px45y/delegate",
    denomName: "ubcna",
    denomPow: 6,
    githubRepoName: 'bcna',
    isSummaryEnabled: true
  }),
  new Chain({
    id: "kichain",
    chainName: "Kichain",
    chainId: "kichain-2",
    logo: "kichain.svg",
    snapshotServer: "https://snapshots1.nodejumper.io",
    rpcServer: "https://kichain.nodejumper.io",
    rpcPeer: "766ed622c79fa9cfd668db9741a1f72a5751e0cd@kichain.nodejumper.io:28656",
    binaryName: "kid",
    homeDirectoryName: ".kid",
    twitter: "https://twitter.com/Ki_Foundation",
    github: "https://github.com/KiFoundation",
    globe: "https://foundation.ki",
    medium: "https://medium.com/ki-foundation",
    discord: "https://discord.gg/Vg4F2uMZYq",
    blockExplorer: "https://www.mintscan.io/ki-chain",
    coingekoCoinId: "ki",
    validatorUrl: "https://restake.app/kichain/kivaloper1q5vfka8z05t27jf4fuawpec99mvv9df90yc57a/delegate",
    denomName: "uxki",
    denomPow: 6,
    githubRepoName: 'ki-tools',
    isSummaryEnabled: true,
    isTopLevelWasmEnabled: true,
    isStateSyncEnabled: false
  }),
  new Chain({
    id: "desmos",
    chainName: "Desmos",
    chainId: "desmos-mainnet",
    logo: "desmos.svg",
    snapshotServer: "https://snapshots1.nodejumper.io",
    rpcServer: "https://desmos.nodejumper.io",
    rpcPeer: "f090ead239426219d605b392314bdd73d16a795f@desmos.nodejumper.io:32656",
    binaryName: "desmos",
    serviceName: "desmosd",
    homeDirectoryName: ".desmos",
    twitter: "https://twitter.com/DesmosNetwork",
    github: "https://github.com/desmos-labs",
    globe: "https://www.desmos.network/",
    medium: "https://medium.com/desmosnetwork",
    discord: "https://discord.com/invite/ckFcU5vxxc",
    blockExplorer: "https://www.mintscan.io/desmos",
    validatorUrl: "https://restake.app/desmos/desmosvaloper184nr4azm7kwas40yzftfxy9ma2lrm5pp5q795x/delegate",
    denomName: "udsm",
    denomPow: 6,
    githubRepoName: 'desmos',
    isSummaryEnabled: true,
    isTendermintUnsafeResetEnabled: false
  }),
  new Chain({
    id: "omniflix",
    chainName: "Omniflix",
    chainId: "omniflixhub-1",
    logo: "omniflix.png",
    snapshotServer: "https://snapshots2.nodejumper.io",
    rpcServer: "https://omniflix.nodejumper.io",
    rpcPeer: "b7ac7a52dbb4041133e31e0552f4e01e926d3bb4@omniflix.nodejumper.io:33656",
    binaryName: "omniflixhubd",
    homeDirectoryName: ".omniflixhub",
    twitter: "https://twitter.com/@OmniFlixNetwork",
    github: "https://github.com/OmniFlix",
    globe: "https://omniflix.network/",
    medium: "https://medium.com/@OmniFlix",
    discord: "https://discord.com/invite/6gdQ4yZSTC",
    blockExplorer: "https://www.mintscan.io/omniflix",
    coingekoCoinId: "omniflix-network",
    validatorUrl: "",
    denomName: "uflix",
    denomPow: 6,
    githubRepoName: 'omniflixhub',
    isSummaryEnabled: true,
    isTendermintUnsafeResetEnabled: false
  }),
  new Chain({
    id: "starname",
    chainName: "Starname",
    chainId: "iov-mainnet-ibc",
    logo: "starname.svg",
    snapshotServer: "https://snapshots2.nodejumper.io",
    rpcServer: "https://starname.nodejumper.io",
    rpcPeer: "3180fdc5e477e675acd22e63477ce3a2db20edf9@starname.nodejumper.io:34656",
    binaryName: "starnamed",
    homeDirectoryName: ".starnamed",
    twitter: "https://twitter.com/starname_me",
    github: "https://github.com/iov-one",
    globe: "https://www.starname.me/",
    medium: "https://medium.com/iov-internet-of-values",
    discord: "https://discord.gg/xE36Rcsv37",
    blockExplorer: "https://www.mintscan.io/starname",
    validatorUrl: "https://ping.pub/starname/staking/starvaloper1c8p90su0tdz67xdhx5470lzvs2lw8twqw9j0vf",
    denomName: "uiov",
    denomPow: 6,
    apiChainId: "iov",
    githubRepoName: 'starnamed',
    isStateSyncEnabled: false,
    isSummaryEnabled: true,
    isTendermintUnsafeResetEnabled: false
  }),
  new Chain({
    id: "osmosis",
    chainName: "Osmosis",
    chainId: "osmosis-1",
    logo: "osmosis.svg",
    snapshotServer: "https://snapshots2.nodejumper.io",
    rpcServer: "https://osmosis.nodejumper.io",
    rpcPeer: "83c06bc290b6dffe05aa9cec720bedfc118afcbc@osmosis.nodejumper.io:35656",
    binaryName: "osmosisd",
    homeDirectoryName: ".osmosisd",
    twitter: "https://twitter.com/osmosiszone",
    github: "https://github.com/osmosis-labs",
    globe: "https://osmosis.zone",
    medium: "https://medium.com/osmosis",
    discord: "https://discord.gg/H8S3dApme6",
    blockExplorer: "https://www.mintscan.io/osmosis",
    validatorUrl: "https://www.mintscan.io/osmosis/validators/osmovaloper1vpqqry2dfrrrh33wrnxjj9k9xg928z646w97p6",
    denomName: "uosmo",
    denomPow: 6,
    githubRepoName: 'osmosis',
    isStateSyncEnabled: false,
    isSummaryEnabled: true
  }),
  new Chain({
    id: "galaxy",
    chainName: "Galaxy",
    chainId: "galaxy-1",
    logo: "galaxy.svg",
    snapshotServer: "https://snapshots2.nodejumper.io",
    rpcServer: "https://galaxy.nodejumper.io",
    rpcPeer: "1e9aa80732182fd7ea005fc138b05e361b9c040d@galaxy.nodejumper.io:30656",
    binaryName: "galaxyd",
    homeDirectoryName: ".galaxy",
    twitter: "https://twitter.com/glxuniverse",
    github: "https://github.com/galaxies-labs",
    globe: "https://galaxychain.zone",
    medium: "https://medium.com/@galaxyuniverse",
    discord: "https://discord.com/invite/DkPNtpJQ8C",
    blockExplorer: "https://explorer.postcapitalist.io/galaxy",
    validatorUrl: "https://restake.app/galaxy/galaxyvaloper18nlst8rzmj0m2r7d2fattr3qmn3pmzyg740978/delegate",
    denomName: "uglx",
    denomPow: 6,
    githubRepoName: 'galaxy',
    isTendermintUnsafeResetEnabled: false
  }),
  new Chain({
    id: "evmos",
    chainName: "Evmos",
    chainId: "evmos_9001-2",
    logo: "evmos.svg",
    snapshotServer: "https://snapshots1.nodejumper.io",
    rpcServer: "https://evmos.nodejumper.io",
    rpcPeer: "876eadd24a1f4f9f88f4ea540cb1ff456a4e34ee@evmos.nodejumper.io:36656",
    binaryName: "evmosd",
    homeDirectoryName: ".evmosd",
    twitter: "https://twitter.com/EvmosOrg",
    github: "https://github.com/tharsis",
    globe: "https://evmos.org/",
    medium: "https://medium.com/@TharsisHQ",
    discord: "https://discord.gg/evmos",
    blockExplorer: "https://www.mintscan.io/evmos",
    validatorUrl: "https://ping.pub/evmos/staking/evmosvaloper1hm5elxdjfx4pltn00e0tde0avhpj03tynuhkk3",
    denomName: "aevmos",
    denomPow: 18,
    archiveReason: "No longer supported.",
    githubRepoName: 'evmos',
    isArchive: true,
    isSummaryEnabled: true
  }),
  new Chain({
    id: "juno",
    chainName: "Juno",
    chainId: "juno-1",
    logo: "juno.svg",
    snapshotServer: "https://snapshots1.nodejumper.io",
    rpcServer: "https://juno.nodejumper.io",
    rpcPeer: "87ed42f2dd265013f3e5a6643ff6e0fffadb9aa0@juno.nodejumper.io:29656",
    binaryName: "junod",
    homeDirectoryName: ".juno",
    twitter: "https://twitter.com/JunoNetwork",
    github: "https://github.com/CosmosContracts",
    globe: "https://www.junonetwork.io",
    medium: "https://medium.com/@JunoNetwork",
    discord: "https://discord.gg/bRXvatqreb",
    blockExplorer: "https://www.mintscan.io/juno",
    validatorUrl: "",
    denomName: "ujuno",
    coingekoCoinId: "juno-network",
    denomPow: 6,
    githubRepoName: 'juno',
    isSummaryEnabled: true
  }),
  new Chain({
    id: "stafihub",
    chainName: "StaFiHub",
    chainId: "stafihub-1",
    logo: "stafihub.svg",
    snapshotServer: "https://snapshots3.nodejumper.io",
    rpcServer: "https://stafihub.nodejumper.io",
    rpcPeer: "967d2fc0e58f5d7f7954c2059cef4de62e4c513f@stafihub.nodejumper.io:26656",
    binaryName: "stafihubd",
    homeDirectoryName: ".stafihub",
    twitter: "https://twitter.com/StaFiHub_",
    github: "https://github.com/stafihub",
    globe: "https://www.stafihub.io",
    discord: "https://discord.gg/98GuF8AE3D",
    blockExplorer: "https://ping.pub/stafihub",
    validatorUrl: "https://ping.pub/stafihub/staking/stafivaloper18nuuhuwywsk8at72pxk94rw27nkkf7pl8ws3kv",
    coingekoCoinId: "stafi",
    denomName: "ufis",
    denomPow: 6,
    githubRepoName: 'stafihub',
    isSummaryEnabled: true
  }),
  new Chain({
    id: "sifchain",
    chainName: "Sifchain",
    chainId: "sifchain-1",
    logo: "sifchain.svg",
    snapshotServer: "https://snapshots3.nodejumper.io",
    rpcServer: "https://sifchain.nodejumper.io",
    rpcPeer: "6409c82fc0ff91c5016cafab71cf6c95aae1e36d@sifchain.nodejumper.io:27656",
    binaryName: "sifnoded",
    homeDirectoryName: ".sifnoded",
    twitter: "https://twitter.com/sifchain",
    github: "https://github.com/Sifchain",
    globe: "https://www.sifchain.finance",
    discord: "https://discord.gg/MyagMRXx",
    medium: "https://medium.com/sifchain-finance",
    blockExplorer: "https://www.mintscan.io/sifchain",
    validatorUrl: "https://restake.app/sifchain/sifvaloper1tvy5apxqsf3jf0uhzknvj6qndy473smzjezvh9/delegate",
    denomName: "rowan",
    denomPow: 18,
    githubRepoName: 'sifnode',
    isSummaryEnabled: true
  }),
  new Chain({
    id: "rebus",
    chainName: "Rebus",
    chainId: "reb_1111-1",
    logo: "rebus.png",
    snapshotServer: "https://snapshots1.nodejumper.io",
    rpcServer: "https://rebus.nodejumper.io",
    rpcPeer: "b574e11e103058a121cc03d1c4d9867ba3daed34@rebus.nodejumper.io:31656",
    binaryName: "rebusd",
    homeDirectoryName: ".rebusd",
    twitter: "https://twitter.com/RebusChain",
    github: "https://github.com/rebuschain",
    globe: "https://www.rebuschain.com",
    discord: "https://discord.gg/cBGpcyHmBH",
    medium: "https://medium.com/@RebusChain",
    blockExplorer: "https://rebus.explorers.guru",
    validatorUrl: "https://rebus.explorers.guru/validator/rebusvaloper1kwv8r3n93dwtk59l5lkyp9qn3u5jzxzy0mrdp8",
    denomName: "arebus",
    denomPow: 6,
    githubRepoName: 'rebus.core'
  }),
  new Chain({
    id: "teritori",
    chainName: "Teritori",
    chainId: "teritori-1",
    logo: "teritori.png",
    snapshotServer: "https://snapshots3.nodejumper.io",
    rpcServer: "https://teritori.nodejumper.io",
    rpcPeer: "26175f13ada3d61c93bca342819fd5dc797bced0@teritori.nodejumper.io:28656",
    binaryName: "teritorid",
    homeDirectoryName: ".teritorid",
    twitter: "https://twitter.com/TeritoriNetwork",
    github: "https://github.com/TERITORI",
    globe: "https://teritori.com",
    discord: "https://discord.gg/UAzKUpsZhn",
    blockExplorer: "https://teritori.explorers.guru",
    validatorUrl: "https://restake.app/teritori/torivaloper18t2j2kc08su2l2dafcanq43yxj9akpwp6gemr0/delegate",
    denomName: "utori",
    denomPow: 6,
    hardwareRequirements: "4CPU 8RAM 200GB",
    githubRepoName: 'teritori-chain',
    isStateSyncEnabled: false,
  }),
  new Chain({
    id: "another1-testnet",
    chainName: "Another-1",
    chainId: "anone-testnet-1",
    logo: "another1.png",
    snapshotServer: "https://snapshots1-testnet.nodejumper.io",
    rpcServer: "https://another1-testnet.nodejumper.io",
    rpcPeer: "2b540c43d640befc35959eb062c8505612b7d67f@another1-testnet.nodejumper.io:26656",
    binaryName: "anoned",
    homeDirectoryName: ".anone",
    twitter: "https://twitter.com/AN1official",
    github: "https://github.com/notional-labs",
    globe: "https://another-1.io",
    medium: "https://medium.com/@TharsisHQ",
    discord: "https://discord.gg/wHP4sYwHCJ",
    validatorUrl: "https://anone.explorers.guru/validator/onevaloper1fngfsax3w9mywln2njh5s3nf92nyfaueqg6jhy",
    denomName: "uan1",
    denomPow: 6,
    archiveReason: 'Testnet ended due to migration to Polygon.',
    githubRepoName: 'anone',
    isTestnet: true,
    isArchive: true,
  }),
  new Chain({
    id: "sei-testnet",
    chainName: "Sei",
    chainId: "atlantic-1",
    logo: "sei.png",
    snapshotServer: "https://snapshots1-testnet.nodejumper.io",
    rpcServer: "https://sei-testnet.nodejumper.io",
    rpcPeer: "4b5fb7390e9c64bc96f048816f472f4559fafd94@sei-testnet.nodejumper.io:28656",
    binaryName: "seid",
    homeDirectoryName: ".sei",
    twitter: "https://twitter.com/SeiNetwork",
    github: "https://github.com/sei-protocol",
    globe: "https://www.seinetwork.io/",
    discord: "https://discord.gg/6vg2WYEzr2",
    telegram: "https://t.me/seinetwork",
    blockExplorer: "https://sei.explorers.guru",
    validatorUrl: "https://sei.explorers.guru/validator/seivaloper1kl7885wtqwu2pau3c6z7x6ptes730fnt4auawd",
    denomName: "usei",
    denomPow: 6,
    githubRepoName: 'sei-chain',
    testnetTasksLink: 'https://3pgv.notion.site/All-Seinami-Testnet-Missions-16c0a40320244c24b0bc3f663c0cf00b',
    isTestnet: true,
    isTopLevelWasmEnabled: true,
  }),
  new Chain({
    id: "dws-testnet",
    chainName: "DWS",
    chainId: "deweb-testnet-sirius",
    logo: "dws.png",
    snapshotServer: "https://snapshots1-testnet.nodejumper.io",
    rpcServer: "https://dws-testnet.nodejumper.io",
    rpcPeer: "c5b45045b0555c439d94f4d81a5ec4d1a578f98c@dws-testnet.nodejumper.io:27656",
    binaryName: "dewebd",
    homeDirectoryName: ".deweb",
    twitter: "https://twitter.com/dewebservices",
    github: "https://github.com/deweb-services",
    globe: "https://deweb.services",
    discord: "https://discord.gg/EeH8C8gUuX",
    blockExplorer: "https://dws.explorers.guru",
    validatorUrl: "https://dws.explorers.guru/validator/dewebvaloper1pdhaj6ct3wyfahn2u6zllxp3dq6dfuatwtkf6n",
    denomName: "udws",
    denomPow: 6,
    githubRepoName: 'deweb',
    isTestnet: true,
    isTopLevelWasmEnabled: true
  }),
  new Chain({
    id: "uptick-testnet",
    chainName: "Uptick",
    chainId: "uptick_7776-1",
    logo: "uptick.png",
    snapshotServer: "https://snapshots1-testnet.nodejumper.io",
    rpcServer: "https://uptick-testnet.nodejumper.io",
    rpcPeer: "ce7e61b565292d6606fc0fbf4b2bc364227a1ef0@uptick-testnet.nodejumper.io:30656",
    binaryName: "uptickd",
    homeDirectoryName: ".uptickd",
    twitter: "https://twitter.com/uptickproject",
    github: "https://github.com/UptickNetwork",
    globe: "https://uptick.network",
    medium: "https://medium.com/@uptickproject",
    discord: "https://discord.gg/w7mYy8btu7",
    blockExplorer: "https://explorer.testnet.uptick.network/uptick-network-testnet",
    validatorUrl: "https://explorer.testnet.uptick.network/uptick-network-testnet/staking/uptickvaloper1krfszwgypy2pzzkh94juf4jcnyfkczzqr45l5u",
    denomName: "auptick",
    denomPow: 6,
    archiveReason: 'Testnet ended.',
    endedAt: '2022-07-09',
    githubRepoName: 'uptick',
    isTestnet: true,
    isArchive: true,
  }),
  new Chain({
    id: "quicksilver-testnet",
    chainName: "Quicksilver",
    chainId: "killerqueen-1",
    logo: "quicksilver.png",
    snapshotServer: "https://snapshots1-testnet.nodejumper.io",
    rpcServer: "https://quicksilver-testnet.nodejumper.io",
    rpcPeer: "420ddb75ac0c0eb27d46c41007f18a0bf5588fc0@quicksilver-testnet.nodejumper.io:31656",
    binaryName: "quicksilverd",
    homeDirectoryName: ".quicksilverd",
    twitter: "https://twitter.com/quicksilverzone",
    github: "https://github.com/ingenuity-build",
    globe: "https://quicksilver.zone/",
    medium: "https://medium.com/quicksilverzone",
    discord: "https://discord.gg/6BXWvuGZYn",
    blockExplorer: "https://quicksilver.explorers.guru",
    validatorUrl: "https://quicksilver.explorers.guru/validator/quickvaloper159njc3xk0xv76x323936frgwxf9zn3wvp0dj8n",
    denomName: "uqck",
    denomPow: 6,
    githubRepoName: 'quicksilver',
    archiveReason: 'Testnet ended.',
    endedAt: '2022-07-16',
    testnetTasksLink: 'https://github.com/ingenuity-build/testnets/blob/main/killerqueen/VALIDATOR_TASKS.md',
    isTestnet: true,
    isArchive: true,
  }),
  new Chain({
    id: "paloma-testnet",
    chainName: "Paloma",
    chainId: "paloma-testnet-12",
    logo: "paloma.png",
    snapshotServer: "https://snapshots1-testnet.nodejumper.io",
    rpcServer: "https://paloma-testnet.nodejumper.io",
    rpcPeer: "484e0d3cc02ba868d4ad68ec44caf89dd14d1845@paloma-testnet.nodejumper.io:33659",
    binaryName: "palomad",
    homeDirectoryName: ".paloma",
    twitter: "https://twitter.com/paloma_chain",
    github: "https://github.com/palomachain",
    globe: "https://www.palomachain.com",
    telegram: "https://t.me/palomachain",
    discord: "https://discord.gg/ET4tEgWQCj",
    blockExplorer: "https://paloma.explorers.guru",
    validatorUrl: "https://paloma.explorers.guru/validator/palomavaloper1kludne80z0tcq9t7j9fqa630fechsjhxc324tt",
    denomName: "ugrain",
    denomPow: 6,
    hardwareRequirements: "4CPU 8RAM 200GB",
    isTestnet: true
  }),
  new Chain({
    id: "stafihub-testnet",
    chainName: "StaFiHub",
    chainId: "stafihub-public-testnet-3",
    logo: "stafihub.svg",
    snapshotServer: "https://snapshots2-testnet.nodejumper.io",
    rpcServer: "https://stafihub-testnet.nodejumper.io",
    rpcPeer: "4b5afbe0bd0d128f98943c0f2941976bd3fb0b9b@stafihub-testnet.nodejumper.io:26656",
    binaryName: "stafihubd",
    homeDirectoryName: ".stafihub",
    twitter: "https://twitter.com/StaFiHub_",
    github: "https://github.com/stafihub",
    globe: "https://www.stafihub.io",
    discord: "https://discord.gg/98GuF8AE3D",
    blockExplorer: "https://testnet-explorer.stafihub.io/stafi-hub-testnet",
    validatorUrl: "https://testnet-explorer.stafihub.io/stafi-hub-testnet/staking/stafivaloper18nuuhuwywsk8at72pxk94rw27nkkf7pl8ws3kv",
    denomName: "ufis",
    denomPow: 6,
    githubRepoName: 'stafihub',
    archiveReason: 'Testnet ended.',
    endedAt: '2022-08-05',
    isTestnet: true,
    isArchive: true,
  }),
  new Chain({
    id: "teritori-testnet",
    chainName: "Teritori",
    chainId: "teritori-testnet-v3",
    logo: "teritori.png",
    snapshotServer: "https://snapshots2-testnet.nodejumper.io",
    rpcServer: "https://teritori-testnet.nodejumper.io",
    rpcPeer: "0d19829b0dd1fc324cfde1f7bc15860c896b7ac1@teritori-testnet.nodejumper.io:27656",
    binaryName: "teritorid",
    homeDirectoryName: ".teritorid",
    twitter: "https://twitter.com/TeritoriNetwork",
    github: "https://github.com/TERITORI",
    globe: "https://teritori.com",
    discord: "https://discord.gg/UAzKUpsZhn",
    denomName: "utori",
    denomPow: 6,
    githubRepoName: 'teritori-chain',
    testnetTasksLink: 'https://teritori.crew3.xyz/questboard',
    blockExplorer: 'https://explorer.kjnodes.com/teritori',
    validatorUrl: 'https://explorer.kjnodes.com/teritori/staking/torivaloper18t2j2kc08su2l2dafcanq43yxj9akpwp6gemr0',
    isTestnet: true,
    isStateSyncEnabled: false,
  }),
  new Chain({
    id: "stride-testnet",
    chainName: "Stride",
    chainId: "STRIDE-TESTNET-4",
    logo: "stride.png",
    snapshotServer: "https://snapshots2-testnet.nodejumper.io",
    rpcServer: "https://stride-testnet.nodejumper.io",
    rpcPeer: "17b24705533d633cb3501233a18912ae6cc36a41@stride-testnet.nodejumper.io:28656",
    binaryName: "strided",
    homeDirectoryName: ".stride",
    twitter: "https://twitter.com/stride_zone",
    github: "https://github.com/Stride-Labs",
    globe: "https://stride.zone/",
    discord: "https://discord.gg/ut6JucWWR3",
    blockExplorer: "https://stride.explorers.guru",
    validatorUrl: "https://stride.explorers.guru/validator/stridevaloper1l8vtxx634c6hkqr0q3zccnsk0dj3njlvwq0faf",
    denomName: "ustrd",
    denomPow: 6,
    testnetTasksLink: "https://github.com/Stride-Labs/testnet/tree/main/incentivized-testnet",
    githubRepoName: 'stride',
    isTestnet: true,
    isArchive: true,
  }),
  new Chain({
    id: "rebus-testnet",
    chainName: "Rebus",
    chainId: "reb_3333-1",
    logo: "rebus.png",
    snapshotServer: "https://snapshots2-testnet.nodejumper.io",
    rpcServer: "https://rebus-testnet.nodejumper.io",
    rpcPeer: "cfaaa1aa3b47a3d457bd7bad4ca54a18829b83cc@rebus-testnet.nodejumper.io:29656",
    binaryName: "rebusd",
    homeDirectoryName: ".rebusd",
    twitter: "https://twitter.com/RebusChain",
    github: "https://github.com/rebuschain",
    globe: "https://www.rebuschain.com",
    discord: "https://discord.gg/cBGpcyHmBH",
    medium: "https://medium.com/@RebusChain",
    blockExplorer: "https://rebus.explorers.guru",
    validatorUrl: "https://rebus.explorers.guru/validator/rebusvaloper1nntq6xqgcpjgpuz5jl85lhatpmlefywfvrd70f",
    denomName: "arebus",
    denomPow: 6,
    archiveReason: 'Testnet ended.',
    endedAt: '2022-09-11',
    githubRepoName: 'rebus.core',
    isTestnet: true,
    isArchive: true,
  }),
  new Chain({
    id: "cardchain-testnet",
    chainName: "Cardchain",
    chainId: "Testnet3",
    logo: "cardchain.png",
    snapshotServer: "https://snapshots2-testnet.nodejumper.io",
    rpcServer: "https://cardchain-testnet.nodejumper.io",
    rpcPeer: "c33a6ea0c7f82b4cc99f6f62a0e7ffdb3046a345@cardchain-testnet.nodejumper.io:30656",
    binaryName: "Cardchaind",
    homeDirectoryName: ".Cardchain",
    twitter: "https://twitter.com/CrowdControlNet",
    github: "https://github.com/DecentralCardGame",
    globe: "https://crowdcontrol.network/",
    discord: "https://discord.gg/CttUtFH5W4",
    blockExplorer: "https://explorer.kjnodes.com/cardchain",
    validatorUrl: "https://explorer.kjnodes.com/cardchain/staking/ccvaloper1d2gnx8gxf44tkjky7ftwfkg9k0lln56x8tp7zl",
    denomName: "ubpf",
    denomPow: 6,
    isTestnet: true
  }),
  new Chain({
    id: "terpnetwork-testnet",
    chainName: "terp",
    prettyChainName: "Terp Network",
    chainId: "athena-1",
    logo: "terp.png",
    snapshotServer: "https://snapshots2-testnet.nodejumper.io",
    rpcServer: "https://terp-testnet.nodejumper.io",
    rpcPeer: "15f5bc75be9746fd1f712ca046502cae8a0f6ce7@terp-testnet.nodejumper.io:30656",
    binaryName: "terpd",
    homeDirectoryName: ".terp",
    twitter: "https://twitter.com/terpculture",
    github: "https://github.com/terpnetwork",
    globe: "https://terp.network",
    discord: "https://discord.gg/CnsMGn47tP",
    blockExplorer: "https://explorer.kjnodes.com/terp",
    validatorUrl: "https://explorer.kjnodes.com/terp/staking/terpvaloper1rwyn6w46u3067enhpdceqasg2um8dddt6tehsv",
    denomName: "uterpx",
    denomPow: 6,
    hardwareRequirements: "4CPU 8RAM 200GB",
    isStateSyncEnabled: false,
    isTestnet: true,
    isTopLevelWasmEnabled: true
  }),
  new Chain({
    id: "empower-testnet",
    chainName: "empower",
    prettyChainName: "Empower Chain",
    chainId: "altruistic-1",
    logo: "empower.png",
    snapshotServer: "https://snapshots2-testnet.nodejumper.io",
    rpcServer: "https://empower-testnet.nodejumper.io",
    rpcPeer: "ca8b9d5fecd3258cb8bb4164017114898cd63ad5@empower-testnet.nodejumper.io:31656",
    binaryName: "empowerd",
    homeDirectoryName: ".empowerchain",
    twitter: "https://twitter.com/empowerchain_io",
    github: "https://github.com/empowerchain",
    globe: "https://www.empowerchain.io",
    discord: "https://discord.gg/xVMWBreSfN",
    telegram: "https://t.me/empowerchain",
    blockExplorer: "https://empower.explorers.guru",
    validatorUrl: "https://empower.explorers.guru/validator/empowervaloper1gved6qjsy8rxf2qxqqtk6uxnalhtm2usp2f5a2",
    denomName: "umpwr",
    denomPow: 6,
    hardwareRequirements: "4CPU 8RAM 200GB",
    isStateSyncEnabled: false,
    isTestnet: true
  }),
  new Chain({
    id: "ollo-testnet",
    chainName: "Ollo",
    prettyChainName: "OLLO",
    chainId: "ollo-testnet-0",
    logo: "ollo.png",
    snapshotServer: "https://snapshots2-testnet.nodejumper.io",
    rpcServer: "https://ollo-testnet.nodejumper.io",
    rpcPeer: "6aa3e31cc85922be69779df9747d7a08326a44f2@ollo-testnet.nodejumper.io:28656",
    binaryName: "ollod",
    homeDirectoryName: ".ollo",
    twitter: "https://twitter.com/OllOStation",
    github: "https://github.com/OllO-Station",
    telegram: "https://t.me/+s8i4AKk0Tt44Yzgx",
    globe: "https://www.ollostation.zone",
    discord: "https://discord.gg/bmDSF7jtZP",
    blockExplorer: "https://ollo.explorers.guru/",
    validatorUrl: "https://ollo.explorers.guru/validator/ollovaloper1dw8n8wygrf7ylaf6qcly2wf3k9q0ffwy22nej4",
    denomName: "utollo",
    denomPow: 6,
    hardwareRequirements: "4CPU 8RAM 200GB",
    isTestnet: true
  })
];
