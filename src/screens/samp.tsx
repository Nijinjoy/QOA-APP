<ImageBackground source={headerintersection} style={{ backgroundColor: colors.skyblue }}>
    <SafeAreaView style={{ flexDirection: "row", alignItems: 'center', marginHorizontal: WIDTH * 0.05, marginTop: HEIGHT * 0.06 }}>
        <Pressable style={{ flex: 0.3 }}>
            <View>
                <Image source={icon} resizeMode='contain' />
            </View>
        </Pressable>
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 0.6 }}>
            <Text style={{ fontSize: 18, color: colors.purewhite, width: '100%', textAlign: 'center' }}>All Programs</Text>
        </View>
    </SafeAreaView>
</ImageBackground>
