import { useCallback, useRef } from "react";

export function useThrottle(fn,delay){
  const lastRun = useRef(-Infinity);
  const throttledFn = useCallback((...args)=>{
    const now = Date.now()
    if(now-lastRun.current > delay){
      lastRun.current = now;
      fn(...args)
    }
  },[fn,delay])

  return throttledFn
}