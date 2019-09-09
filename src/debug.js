/**
 * @copyright 2016-2019 David Cary;
 * @license Apache-2.0
 *
 * Count votes with Meek's Method RCV / STV
 *
 * Debug utilities
 */

// Level of debugging traces
//   0 = no traces
//   1 = problem specific traces
//   2 = high level tracking of what happened
//   3 = high level summary data
//   4 = high level more detailed data
//   5 = problem specific traces
//   6 = mid-level tracking of what happened
//   7 = mid-level tracking of summary data
//   8 = mid-level tracking of more detailed data
//   9 = problem specific traces
//  10 = ballot or candidate level activity
//  11 = ballot or candidate level data
//  12 = ranking level activity
//  13 = ranking level data
//  14 = input text area, file text, inputData, etc.
export const UI_DBG = 0; // Limit on level of debugging traces, not to exceed

export const PDBG = console.debug;

export function setDBG(level) {
  const result = Math.min(level, UI_DBG);
  return result;
}

const Debug = {setDBG: setDBG, UI_DBG: UI_DBG , PDBG: PDBG};
export default Debug;

