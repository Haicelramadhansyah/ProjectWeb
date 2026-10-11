import * as React from "react";
import { Box } from "@chakra-ui/react";

type HomeImageBlobProps = {
  fill: string;
  image: string;
};

export default function HomeImageBlob({ fill, image }: HomeImageBlobProps): React.JSX.Element {
  // id unik per instance agar url(#...) tidak bentrok
  const clipId = `blob-clip-${React.useId().replace(/:/g, "")}`;

  const blobPath =
    "M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 " +
    "130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 " +
    "97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 " +
    "0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z";

  return (
    // Wrapper luar: lebar pasti + padding sebagai pengganti margin SVG lama
    <Box
      width="100%"
      maxWidth={{ base: "25rem", md: "26rem", lg: "none" }}
      marginX="auto"
      padding={{ base: "1", lg: "4" }}
      flexShrink={0}
    >
      {/* Wrapper rasio: tinggi = 187/200 = 93.5% dari lebar.
          Tinggi didapat dari padding-bottom, jadi tidak bisa runtuh jadi 0 di Safari iOS. */}
      <Box
        position="relative"
        width="100%"
        height="0"
        paddingBottom="93.5%"
      >
        <svg
          viewBox="0 0 200 187"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          // absolute + 100%: SVG mengisi wrapper yang tingginya sudah pasti
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", display: "block" }}
        >
          <defs>
            <clipPath id={clipId}>
              <path d={blobPath} />
            </clipPath>
          </defs>

          {/* Bentuk blob berwarna */}
          <path
            d={blobPath}
            fill={fill}
          />

          {/* Foto dipotong mengikuti blob */}
          <g clipPath={`url(#${clipId})`}>

            <image
            
  x="10"
  y="7"
  href={image}
  xlinkHref={image}
  width="180"
  height="180"
  preserveAspectRatio="xMidYMax meet"
/>
            
          </g>
        </svg>
      </Box>
    </Box>
  );
}