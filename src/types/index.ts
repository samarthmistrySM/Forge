export interface TerminalState {
  isReady: boolean;
  status: 'initializing' | 'ready';
}

export type TerminalStatus = TerminalState['status'];
