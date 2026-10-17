/**
 * Phosphor icons (https://phosphoricons.com), duotone so the fill reads like a highlighter wash.
 * The /ssr build has no context, so it works in server and client components alike.
 */
import type { IconProps } from "@phosphor-icons/react";
import {
  BankIcon,
  BirdIcon,
  BridgeIcon,
  BuildingsIcon,
  DropIcon,
  GitForkIcon,
  GitMergeIcon,
  HammerIcon,
  HandsPrayingIcon,
  IslandIcon,
  MountainsIcon,
  PathIcon,
  SnowflakeIcon,
  TreeIcon,
  WallIcon,
  WavesIcon,
} from "@phosphor-icons/react/ssr";
import type { ComponentType } from "react";
import type { PlaceKind } from "@/content/types";

export type { IconProps };

/** Shared defaults: duotone, sized to the surrounding text, colour inherited from the ink. */
export const ink: IconProps = { weight: "duotone", size: "1.15em", "aria-hidden": true };

export const PLACE_ICON: Record<PlaceKind, ComponentType<IconProps>> = {
  dam: WallIcon,
  barrage: WallIcon,
  waterfall: DropIcon,
  city: BuildingsIcon,
  pilgrimage: HandsPrayingIcon,
  heritage: BankIcon,
  "national-park": TreeIcon,
  wetland: BirdIcon,
  project: HammerIcon,
  gorge: MountainsIcon,
  confluence: GitMergeIcon,
  island: IslandIcon,
  lake: WavesIcon,
  delta: GitForkIcon,
  glacier: SnowflakeIcon,
  valley: MountainsIcon,
  canal: PathIcon,
  bridge: BridgeIcon,
};
