<Pressable style={{ borderWidth: 0, borderRadius: WIDTH * 0.02, backgroundColor: item.background, flexDirection: 'row', alignItems: "center", padding: HEIGHT * 0.025, marginTop: HEIGHT * 0.02 }}>
    <View style={{ marginHorizontal: WIDTH * 0.05, flex: 0.2 }}>
        <Image source={item.icon} />
    </View>
    <View style={{ flex: 0.7 }}>
        <Text style={{ color: colors.purewhite, fontSize: 15, fontWeight: "500" }}>{item.title}</Text>
    </View>
    <View style={{}}>
        <View style={{ position: 'absolute', zIndex: -1, top: 0, left: 0, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={item.intersection} />
        </View>
        <Image source={item.arrow} />
    </View>
</Pressable>


