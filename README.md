# SuspenseLoader sample program

This sample requires Next.js `12.1.6`  
It will not work after that date due to a bug in Next.js.

- The npm package we created to achieve this functionality  
  <https://www.npmjs.com/package/@react-libraries/suspense-loader>

- Operation check site  
  <https://next-streaming.vercel.app/>  
  <https://next-streaming.herokuapp.com/>

- Based on Vercel's RSC-Demo  
  https://github.com/vercel/next-rsc-demo

## The hybrid SSR in this program works as follows

- When concurrentFeatures is enabled  
  Static SSR (within 1.4 seconds) + SSR-Streaming
- When concurrentFeatures is disabled or React17 system is used  
  Static SSR (within 1.4 seconds) + CSR
