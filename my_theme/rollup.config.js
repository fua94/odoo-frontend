import typescript from 'rollup-plugin-typescript2';

export default {
  input: "app/index.ts",
  output: [
    {
      file: 'static/src/js/index.js',
      format: 'iife'
    }
  ],
  plugins: [
    typescript({
      useTsconfigDeclarationDir: true
    })
  ]
};
