const projects = [
    {
        title: 'Issue Tracker',
        category: ['all', 'web'],
        image: './projects/issuetracker.png',
        technologies: [
            'TypeScript',
            'React',
            'Tailwind CSS',
            'Radix UI',
            'Next.js',
            'Next Auth',
            'Google Authentication',
            'Prisma',
            'PostgreSQL'
        ],
        links: ['https://github.com/erkindilekci/issue-tracker', 'https://erkindilekci-issue-tracker.vercel.app']
    },
    {
        title: 'Vibe Station',
        category: ['all', 'web'],
        image: './projects/vibestation.png',
        technologies: [
            'Vite',
            'JavaScript',
            'React',
            'Redux',
            'Tailwind CSS',
        ],
        links: ['https://github.com/erkindilekci/vibe-station', 'https://vibe-station.netlify.app']
    },
    {
        title: 'Factopedia',
        category: ['all', 'web'],
        image: './projects/factopedia.png',
        technologies: [
            'Vite',
            'JavaScript',
            'CSS',
            'React',
            'Supabase'
        ],
        links: ['https://github.com/erkindilekci/factopedia', 'https://erkindilekci-factopedia.netlify.app/']
    },

    {
        title: 'Food Order App',
        category: ['all', 'web'],
        image: './projects/foodorderapp.png',
        technologies: [
            'Vite',
            'JavaScript',
            'CSS',
            'React',
            'Node.js',
            'Express.js',
        ],
        links: ['https://github.com/erkindilekci/food-order-app']
    },
    {
        title: 'Boruto Book',
        category: ['all', 'mobile'],
        image: './projects/boruto.png',
        technologies: [
            'Kotlin',
            'Jetpack Compose',
            'Coroutines',
            'Flows',
            'Ktor',
            'Koin',
            'Clean Architecture',
            'MVVM',
            'Navigation',
            'Retrofit',
            'Coil',
            'Room'
        ],
        links: ['https://github.com/erkindilekci/BorutoBook']
    },
    {
        title: 'Life Log',
        category: ['all', 'mobile'],
        image: './projects/lifelog.png',
        technologies: [
            'Kotlin',
            'Jetpack Compose',
            'Multi-Module',
            'Mongo DB Authentication',
            'Mongo DB Realm',
            'Google Authentication',
            'JWT Authentication',
            'Firebase Storage',
            'Coroutines',
            'Flows',
            'Room',
            'Navigation',
            'Dagger-Hilt',
            'Coil'
        ],
        links: ['https://github.com/erkindilekci/LifeLog']
    },
    {
        title: 'Java Chat Sphere',
        category: ['all', 'mobile'],
        image: './projects/jcs.png',
        technologies: [
            'Java',
            'XML',
            'MVVM',
            'Dagger-Hilt',
            'LiveData',
            'Firebase Authentication',
            'Firebase Realtime Database',
            'RecyclerView',
            'ViewBinding'
        ],
        links: ['https://github.com/erkindilekci/JavaChatSphere']
    },
    {
        title: 'Crypto Balance Tracker',
        category: ['all', 'mobile'],
        image: './projects/cfm.png',
        technologies: [
            'Kotlin',
            'Jetpack Compose',
            'Firebase',
            'DataStore',
            'WorkManager',
            'Dagger-Hilt',
            'Multi-Module',
            'Room',
            'Retrofit',
            'Coroutines',
            'Flows',
            'Gson',
            'Clean Architecture',
            'MVVM',
            'Navigation'
        ],
        links: ['https://github.com/erkindilekci/CryptoBalanceTracker']
    },
    {
        title: 'News App',
        category: ['all', 'mobile'],
        image: './projects/mmnews.png',
        technologies: [
            'Kotlin',
            'XML',
            'Multi-Module',
            'Room',
            'Coroutines',
            'Flows',
            'Clean Architecture',
            'MVVM',
            'Navigation',
            'Dagger-Hilt',
            'Retrofit',
            'Gson',
            'Caching',
            'Data Binding',
            'Glide'
        ],
        links: ['https://github.com/erkindilekci/NewsApp']
    },
    {
        title: 'Vocabulary Book',
        category: ['all', 'mobile'],
        image: './projects/vocabulary.png',
        technologies: [
            'Kotlin',
            'Jetpack Compose',
            'Room',
            'Coil',
            'Dagger-Hilt',
            'Coroutines',
            'Flows',
            'Navigation',
            'Clean Architecture',
            'MVVM',
            'Unit Testing',
            'End-to-End Testing'
        ],
        links: ['https://github.com/erkindilekci/VocabularyBook']
    },
    {
        title: 'To-Do Book',
        category: ['all', 'mobile'],
        image: './projects/todobook.png',
        technologies: [
            'Kotlin',
            'Jetpack Compose',
            'Room',
            'Clean Architecture',
            'Animation',
            'SplashScreen',
            'Navigation',
            'SharedViewModel',
            'MVVM',
            'Coroutines',
            'Flow',
            'Dagger-Hilt',
            'DataStore'
        ],
        links: ['https://github.com/erkindilekci/ToDoBook']
    },
    {
        title: 'Text Book',
        category: ['all', 'mobile'],
        image: './projects/textbook.png',
        technologies: [
            'Kotlin',
            'Jetpack Compose',
            'Room',
            'Clean Architecture',
            'MVVM',
            'Dagger-Hilt',
            'Navigation',
            'Coroutines',
            'Flow',
            'Unit Testing',
            'Instrumented Testing',
            'End-to-End Testing'
        ],
        links: ['https://github.com/erkindilekci/TextBook']
    },
    {
        title: 'Pokemon Book',
        category: ['all', 'mobile'],
        image: './projects/pokemonbook.png',
        technologies: [
            'Kotlin',
            'Jetpack Compose',
            'Retrofit',
            'Gson',
            'OkHttp3',
            'Coil',
            'Navigation',
            'MVVM',
            'Coroutines',
            'Flow',
            'Dagger-Hilt',
            'Timber',
            'Palette'
        ],
        links: ['https://github.com/erkindilekci/PokemonBook']
    },
    {
        title: 'Movie Book',
        category: ['all', 'mobile'],
        image: './projects/movie.png',
        technologies: [
            'Kotlin',
            'Jetpack Compose',
            'Coroutines',
            'Flows',
            'Dagger-Hilt',
            'Retrofit',
            'Gson',
            'Paging3',
            'MVVM',
            'Navigation',
            'Coil',
            'Timber'
        ],
        links: ['https://github.com/erkindilekci/MovieBook']
    },
    {
        title: 'Photo Book',
        category: ['all', 'mobile'],
        image: './projects/photobook.png',
        technologies: [
            'Kotlin',
            'Jetpack Compose',
            'Dagger-Hilt',
            'Retrofit',
            'Serialization',
            'Coil',
            'Room',
            'Paging',
            'Caching',
            'Clean Architecture',
            'MVVM',
            'Navigation'
        ],
        links: ['https://github.com/erkindilekci/PhotoBook']
    },
    {
        title: 'Tic Tac Go',
        category: ['all', 'mobile'],
        image: './projects/tictacgo.png',
        technologies: [
            'Kotlin',
            'Jetpack Compose',
            'Ktor Server',
            'Ktor Client',
            'Serialization',
            'Coroutines',
            'Flows',
            'MVVM',
            'Dagger-Hilt'
        ],
        links: ['https://github.com/erkindilekci/TicTacGo']
    },
    {
        title: 'Parking Spot Finder',
        category: ['all', 'mobile'],
        image: './projects/parkingspotfinder.png',
        technologies: [
            'Kotlin',
            'Jetpack Compose',
            'Google Maps',
            'Coroutines',
            'Flows',
            'Dagger-Hilt',
            'Room',
            'MVVM',
            'Clean Architecture'
        ],
        links: ['https://github.com/erkindilekci/ParkingSpotFinder']
    },
    {
        title: 'GraphQL Country Explorer',
        category: ['all', 'mobile'],
        image: './projects/graph.png',
        technologies: [
            'Kotlin',
            'Jetpack Compose',
            'GraphQL',
            'Coroutines',
            'Flows',
            'MVVM',
            'Clean Architecture',
            'Dagger-Hilt'
        ],
        links: ['https://github.com/erkindilekci/GraphQLCountryExplorer']
    },
    {
        title: 'Chat Wave',
        category: ['all', 'mobile'],
        image: './projects/chatwave.png',
        technologies: [
            'Kotlin',
            'Jetpack Compose',
            'Coroutines',
            'Flows',
            'MVVM',
            'Clean Architecture',
            'Dagger-Hilt',
            'Bluetooth Services',
            'Broadcast Receivers'
        ],
        links: ['https://github.com/erkindilekci/ChatWave']
    },
    {
        title: 'Podcast Sphere',
        category: ['all', 'mobile'],
        image: '',
        technologies: [
            'Kotlin',
            'Jetpack Compose',
            'Coroutines',
            'Flows',
            'Retrofit',
            'Gson',
            'Navigation',
            'ExoPlayer',
            'MVVM',
            'Dagger-Hilt'
        ],
        links: ['https://github.com/erkindilekci/PodcastSphere']
    },
    {
        title: 'Koin Crypto App',
        category: ['all', 'mobile'],
        image: '',
        technologies: [
            'Kotlin',
            'XML',
            'Fragment',
            'Koin',
            'MVVM',
            'Coroutines',
            'Retrofit',
            'RecyclerView'
        ],
        links: ['https://github.com/erkindilekci/KoinCryptoApp']
    }
];

export default projects;
