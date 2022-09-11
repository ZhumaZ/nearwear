import React from "react";
import {
    Box,
    ScrollView,
    Text,
    Spacer,
    Flex,
    Center,
    Image,
} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductSingleCard from "../components/ProductSingleCard";
import ReviewList from "../components/ReviewList";
import { useDimensions } from "../utils";
import { colors } from "../theme";
import { MaterialIcons } from "@expo/vector-icons";
import Carousel from "react-native-snap-carousel";
import { AirbnbRating } from "react-native-ratings";
const DressSingle = () => {
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
                <ProductSingleCard />
                <Box p={3}>
                    <Flex direction="row">
                        <Text color="black" textAlign="justify" flex={1} mr={5}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Pellentesque viverra ornare eleifend. Nam eget
                            consectetur ipsum. Nam eu urna rutrum, ullamcorper
                            urna ut, aliquet nisi. Morbi sagittis, tellus vitae
                            varius tristique, arcu metus vestibulum arcu, sed
                            hendrerit massa nunc at metus.
                        </Text>
                        <Flex direction="row" justifyContent="center">
                            <Box>
                                <Text fontWeight="bold">Price</Text>
                                <Text fontWeight="bold">Days</Text>
                                <Text fontWeight="bold">Location</Text>
                                <Text fontWeight="bold">Status</Text>
                            </Box>
                            <Box width={5}></Box>
                            <Box>
                                <Text>300 TK</Text>
                                <Text>5</Text>
                                <Text>Dhanmondi</Text>
                                <Text>On Rent</Text>
                            </Box>
                        </Flex>
                    </Flex>

                    <Spacer size={2} />
                    <Text color="black" fontWeight="bold" fontSize={18}>
                        Reviews
                    </Text>
                    <Spacer size={2} />
                    <ReviewList />
                    <Text my={5} color="black" fontWeight="bold" fontSize={18}>
                        Similar Dresses
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

export default DressSingle;
