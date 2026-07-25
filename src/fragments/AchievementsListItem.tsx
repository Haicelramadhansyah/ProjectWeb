import * as React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { BiCalendar } from "react-icons/bi";
import type { Achievements } from "@/types";

type AchievementsListItemProps = Achievements;

export default function AchievementsListItem({ Achievements, place, years }: AchievementsListItemProps): React.JSX.Element {
  return (
    <Flex>
      <Box>
        <Box
          width="0.75rem"
          height="0.75rem"
          borderRadius="full"
          backgroundColor="primary"
        />

        <Box
          width="2px"
          height="100%"
          backgroundColor="primary"
          transform="translate(6px, -8px)"
        />
      </Box>

      <Flex
        flex={1}
        direction="column"
        paddingLeft={3}
        rowGap={2}
        paddingBottom={4}
      >
        <Text
          as="h3"
          fontWeight="semibold"
          fontSize="1.1em"
        >
          {Achievements}
        </Text>

        <Text
          as="h4"
          fontWeight="medium"
        >
          {place}
        </Text>

        <Text
          as="h5"
          color="secondary"
          display="inline-flex"
          alignItems="center"
          columnGap={2}
          fontSize="0.9em"
        >
          <BiCalendar /> {years}
        </Text>
      </Flex>
    </Flex>
  );
}
