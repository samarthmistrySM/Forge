import { useMemo, useState } from 'react';

export function useTerminal() {
  const [isReady, setIsReady] = useState(false);
  const status = useMemo(() => (isReady ? 'ready' : 'initializing'), [isReady]);

  return { isReady, setIsReady, status };
}
