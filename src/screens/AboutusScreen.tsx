import { View, Text, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import { HEIGHT, WIDTH } from '../constants/Dimension';
import colors from '../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { backarrow } from '../assets/images';
import fetchData from './apiService';
import AboutusComponent from '../components/AboutusComponent';
import LinkComponent from '../components/LinkComponent';
import AdvisoryCard from '../components/AdvisoryCard';

const AboutusScreen = (props) => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [aboutUs, setAboutUs] = useState({});
    const { apidata, screenTitle } = props?.route?.params;
    const [bannerImage, setBannerImage] = useState('');
    const [description, setDescription] = useState('')
    const [designation, setDesignation] = useState('')
    const [name, setName] = useState('')
    const [committeeMembers, setCommitteeMembers] = useState([]);

    useEffect(() => {
        fetchAboutUs();
    }, []);

    const fetchAboutUs = async () => {
        try {
            setLoading(true);
            const body = {
                "page": props?.route?.params?.apidata
            };
            const data = await fetchData('/about-us', body);
            // console.log("apiresponse==>", JSON.stringify(data));
            if (data && data.status && data.data) {
                if (apidata === "about_us") {
                    setBannerImage(data?.data?.banner_image);
                    setAboutUs(data?.data?.content);
                    setDescription(data?.data?.content?.about_us?.description)
                    // console.log("desc===>", data?.data?.content);
                } else if (apidata === "board_members") {
                    setBannerImage(data?.data?.content?.board_members?.banner_image);
                    setDescription(data?.data?.content?.board_members?.description)
                    setDesignation(data?.data?.content?.board_members?.designation)
                    setName(data?.data?.content?.board_members?.name)
                    // console.log("board==>", data?.data?.content?.board_members?.banner_image);
                    setAboutUs(data?.data?.content);
                } else if (apidata === "president_message") {
                    setBannerImage(data?.data?.banner_image);
                    setAboutUs(data?.data?.content);
                    // console.log("president_message==>", data?.data?.content);
                    setDescription(data?.data?.content?.president_message?.description)
                    setDesignation(data?.data?.content?.president_message?.designation)
                    setName(data?.data?.content?.president_message?.name)
                } else if (apidata === "executive_directors_message") {
                    setBannerImage(data?.data?.banner_image);
                    setAboutUs(data?.data?.content);
                    setDescription(data?.data?.content?.executive_directors_message?.description)
                    setDesignation(data?.data?.content?.executive_directors_message?.designation)
                }
                else if (apidata === "advisory_committee") {
                    setBannerImage(data?.data?.content?.advisory_committee?.data?.image);
                    setCommitteeMembers(data?.data?.content?.advisory_committee?.data || []);
                    // setAboutUs(data?.data?.content);
                    // setDescription(data?.data?.content?.executive_directors_message?.description)
                    // setDesignation(data?.data?.content?.executive_directors_message?.designation)
                }
            }
        } catch (error) {
            console.error('Error fetching about us content:', error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <View style={{ flex: 1 }}>
            <HeaderComponent
                title={screenTitle ?? "About Us"}
                headerStyle={{ height: HEIGHT * 0.13 }}
                containerStyle={{ width: WIDTH * 0.1, borderWidth: 0, height: HEIGHT * 0.045, marginHorizontal: WIDTH * 0.04, backgroundColor: `${colors.white}25` }}
                onPress={() => navigation.goBack()}
                iconStyle={{ width: WIDTH * 0.04, height: HEIGHT * 0.02 }}
                icon={backarrow}
            />
            <ScrollView>
                <View style={{ flex: 1 }}>
                    {apidata !== "advisory_committee" && (
                        <AboutusComponent
                            headerImage={bannerImage}
                            description={description}
                            position={designation}
                            name={name}
                            screenName={apidata}
                            showTitle={screenTitle === "About Us"}
                        />
                    )}

                    <View style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: WIDTH * 0.05 }}>
                        {apidata === "advisory_committee" && (
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: HEIGHT * 0.02 }}>
                                {committeeMembers.map((member, index) => (
                                    <AdvisoryCard
                                        key={index}
                                        cardImage={member?.image}
                                        name={member?.name}
                                        subTitle={member?.sub_title}
                                        Designation={member?.designation}
                                    />
                                ))}
                            </View>
                        )}
                    </View>

                    {/* <View style={{ flex: 1, alignItems: 'center' }}>
                        <View style={{ maxWidth: 600, alignSelf: 'flex-start', paddingHorizontal: 20 }}>
                            {apidata === "advisory_committee" && (
                                <View style={{ marginTop: HEIGHT * 0.02 }}>
                                    {committeeMembers.map((member, index) => (
                                        <AdvisoryCard
                                            key={index}
                                            cardImage={member?.image}
                                            name={member?.name}
                                            subTitle={member?.sub_title}
                                            Designation={member?.designation}
                                        />
                                    ))}
                                </View>
                            )}
                        </View>
                    </View> */}

                    <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: HEIGHT * 0.05 }}>
                        <LinkComponent />
                    </View>

                </View>
            </ScrollView>
        </View>
    );
};

export default AboutusScreen;
