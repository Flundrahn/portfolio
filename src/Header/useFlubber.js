import { interpolate } from 'flubber';
import { useTransform } from 'framer-motion';

export default function useFlubber(progress, paths) {
  return useTransform(
    progress,
    paths.map((_, index) => index),
    paths,
    {
      mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 0.1 }),
    },
  );
}
