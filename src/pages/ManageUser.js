import {
    Box,
    ScrollView,
    Image,
    Avatar,
    Flex,
    Text,
    Center,
    Button,
} from "native-base";
import React from "react";
import { AirbnbRating } from "react-native-ratings";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "react-native-snap-carousel";
import { colors } from "../theme";
import { useDimensions } from "../utils";

const ManageUser = () => {
    const [vh, vw] = useDimensions();

    const data = [
        {
            title: "Aenean leo",
            body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
            imgUrl: "https://picsum.photos/id/11/200/300",
        },
        {
            title: "In turpis",
            body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
            imgUrl: "https://picsum.photos/id/10/200/300",
        },
        {
            title: "Lorem Ipsum",
            body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
            imgUrl: "https://picsum.photos/id/12/200/300",
        },
    ];

    const renderItem = ({ item, index }) => {
        return (
            <Box
                width="100%"
                height="200px"
                borderWidth={1}
                borderColor={colors.primary[300]}
                borderRadius={5}
                mb={2.5}
            >
                <Box
                    width="full"
                    height="2/3"
                    borderTopLeftRadius={5}
                    borderTopRightRadius={5}
                >
                    <Image
                        source={{
                            uri: "https://i.ibb.co/jMhzGZB/sharee.jpg",
                        }}
                        alt="Sharee"
                        width="full"
                        height="full"
                        borderTopLeftRadius={5}
                        borderTopRightRadius={5}
                    />
                </Box>

                <Flex direction="row" p={2} justifyContent="space-between">
                    <Text color={colors.primary[300]}>Silk Sharee</Text>
                    <Box mt={1} ml={3}>
                        <AirbnbRating size={10} showRating={false} />
                    </Box>
                </Flex>
                <Text color={colors.primary[300]} px={2}>
                    500 TK
                </Text>
            </Box>
        );
    };

    const isCarousel = React.useRef(null);

    return (
        <SafeAreaView>
            <ScrollView>
                <Box height={190}>
                    <Image
                        source={{
                            uri: "https://i.ibb.co/jMhzGZB/sharee.jpg",
                        }}
                        alt="Sharee"
                        height={150}
                        borderTopLeftRadius={5}
                        borderBottomLeftRadius={5}
                    />
                    <Flex
                        position="absolute"
                        justifyContent="flex-end"
                        height="full"
                        width="full"
                    >
                        <Avatar
                            alignSelf="center"
                            bg="amber.500"
                            borderColor={colors.primary[300]}
                            borderWidth={5}
                            source={{
                                uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                            }}
                            size={130}
                        ></Avatar>
                    </Flex>
                </Box>
                <Box px={3}>
                    <Center>
                        <Text fontWeight="bold" fontSize={25}>
                            Tania Aktar
                        </Text>
                        <Text fontSize={12}>Since Jan, 2022</Text>
                        <Text>Provider</Text>
                    </Center>
                    <Text textAlign="justify" mt={2}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla imperdiet ultricies urna, et facilisis purus
                        commodo sit amet. Duis feugiat mi sed sollicitudin
                        consectetur. Sed congue, dolor sed tempor laoreet, ex
                        ante aliquet dolor, id facilisis risus diam eget lacus.
                        Nam quis lacus cursus, venenatis ipsum id, sodales
                        ligula.
                    </Text>
                    <Flex direction="row" justifyContent="space-between" my={3}>
                        <Box>
                            <Text>Phone</Text>
                            <Text>Address</Text>
                            <Text>NID</Text>
                            <Text>Status</Text>
                        </Box>
                        <Box>
                            <Text textAlign="right">017XXXXXXX43</Text>
                            <Text textAlign="right">House, Road, City</Text>
                            <Text textAlign="right">459XXXX3244</Text>
                            <Text textAlign="right">unverified</Text>
                        </Box>
                    </Flex>
                    <Center>
                        <Button bgColor={colors.primary[300]}>
                            Request Verification
                        </Button>
                        <Button width={20} mt={1} bgColor={colors.primary[300]}>
                            Ban
                        </Button>
                    </Center>
                    <Text fontWeight="bold" fontSize={20} my={5}>
                        Recent Dresses
                    </Text>
                    <Center>
                        <Carousel
                            layoutCardOffset={9}
                            ref={isCarousel}
                            data={data}
                            renderItem={renderItem}
                            sliderWidth={vw}
                            itemWidth={vw * 0.5}
                            inactiveSlideShift={0}
                            useScrollView={true}
                        />
                    </Center>
                </Box>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ManageUser;
