module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
                alias: {
                    '@components': './src/components',
                    '@screens': './src/screens',
                    '@styles': './src/styles'
                }
            }
        ]
    ]
}
