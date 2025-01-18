import { Box, Flex, VStack, HStack, Text, Avatar, Button, Icon } from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";

export default function Dashboard() {
  return (
    <Flex className="h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <VStack className="w-1/4 bg-gray-800" align="start" p={4} spacing={6}>
        <Text className="text-2xl font-bold text-purple-500">Ai.gnosis</Text>
        <VStack align="start" spacing={4} className="w-full">
          <Button variant="ghost" className="text-left w-full text-purple-200 hover:text-white">
            Dashboard
          </Button>
          <Button variant="ghost" className="text-left w-full text-purple-200 hover:text-white">
            Profiles
          </Button>
          <Button variant="ghost" className="text-left w-full text-purple-200 hover:text-white">
            Book my appointment
          </Button>
          <Button variant="ghost" className="text-left w-full text-purple-200 hover:text-white">
            My Assessments
          </Button>
          <Button variant="ghost" className="text-left w-full text-purple-200 hover:text-white">
            My sessions
          </Button>
          <Button variant="ghost" className="text-left w-full text-purple-200 hover:text-white">
            My reports
          </Button>
          <Button variant="ghost" className="text-left w-full text-purple-200 hover:text-white">
            Log out
          </Button>
        </VStack>
      </VStack>

      {/* Main Content */}
      <VStack className="flex-1 bg-gray-900 p-6">
        {/* Header */}
        <HStack w="full" className="justify-between items-center">
          <HStack>
            <Avatar name="Vinay Prasad" />
            <Box>
              <Text>Welcome</Text>
              <Text className="font-bold">Vinay Prasad</Text>
            </Box>
          </HStack>
          <Icon as={BellIcon} className="text-white" boxSize={6} />
        </HStack>

        {/* Profile Section */}
        <Box className="w-full mt-6">
          <Text className="font-bold text-xl">Profile</Text>
          <Flex className="bg-gray-800 rounded-lg p-6 mt-4 justify-center items-center">
            <Button className="bg-purple-500 hover:bg-purple-600 text-white rounded-full w-16 h-16">+</Button>
          </Flex>
        </Box>

        {/* Info Banner */}
        <Flex className="w-full bg-purple-600 rounded-lg mt-6 p-4 items-center justify-between">
          <Box>
            <Text>Upto 1 in 5 children are at a risk of developmental delays**</Text>
            <Text>Take 5 minutes to check if your child is achieving key milestones on time</Text>
          </Box>
          <Button className="bg-purple-800 hover:bg-purple-900 text-white rounded-md px-4 py-2">
            Act now
          </Button>
        </Flex>

        {/* Sessions Section */}
        <Box className="w-full mt-6">
          <Text className="font-bold text-xl">Sessions</Text>
          <Flex className="mt-4 gap-4">
            {[
              { title: "Assessments & Evaluation", description: "Educational, Psychological & Social Skill Assessment" },
              { title: "Speech & Language", description: "Support for Speech Delays & Communication Needs" },
              { title: "Behaviour Therapy", description: "Guidance for Anxiety & Behavioral Health" },
              { title: "Occupational Therapy", description: "Motor Skills, Independence & Confidence Building" },
              { title: "Special Education", description: "Academic Support in Core Subjects" },
            ].map((session, index) => (
              <Box key={index} className="bg-gray-800 p-4 rounded-lg flex-1">
                <Text className="font-bold">{session.title}</Text>
                <Text className="text-sm mt-2">{session.description}</Text>
              </Box>
            ))}
          </Flex>
          <Button className="mt-6 bg-purple-500 hover:bg-purple-600 text-white rounded-md px-6 py-2">
            Book now
          </Button>
        </Box>
      </VStack>
    </Flex>
  );
}
