'use client';

import dynamic from 'next/dynamic';

/**
 * Dynamic map component that lazy loads the Map component on the client side.
 * We use Next.js dynamic imports to prevent SSR of the Map component which
 * requires browser APIs.
 * 
 * Note: Coverage is ignored for the dynamic import mechanism since it's handled by Next.js.
 * The component's functionality is tested through integration tests that verify
 * proper loading states and final rendered output.
 */

/* c8 ignore start */
const DynamicMap = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
});
/* c8 ignore stop */

export default DynamicMap;