import { PlatformFlags, } from "@/types";


export const resolveTargetPlatform = ({ web, ios, android, }: PlatformFlags) => {
  const isTargetAll = !web && !ios && !android;  // default to all if not target is specified
  return ({
    isTargetAll,
    isTargetWeb: isTargetAll || web,
    isTargetIOS: isTargetAll || ios,
    isTargetAndroid: isTargetAll || android,
  });
}
