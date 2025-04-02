export default {
    plugins: {
        '@tailwindcss/postcss': {},
        'autoprefixer': {},
    }
}
// module.exports = {
//     plugins: [
//         require('@tailwindcss/postcss')({
//             content: ['.src/**/*.html', '.src/**/*.js', '.src/**/*.ts', './src/**/*.svelte'], // Specify your content paths
//         }),
//         require('autoprefixer'),
//     ],
// };