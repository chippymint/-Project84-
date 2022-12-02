return(
    <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}  />
        <View style={styles.appTitle}>
            <View style={styles.appIcon}>
                <Image
                source={require("../assets/logo.png")}
            </View>
        </View>
    </View>

    <DropDownPicker

    items={[
        {label:"Image 1", value:"image_1"},
        {label:"Image 2", value:"image_2"},
        {label:"Image 3", value:"image_3"},
        {label:"Image 4", value:"image_4"},
        {label:"Image 5", value:"image_5"},
        {label:"Image 6", value:"image_6"},
        {label:"Image 7", value:"image_7"}
        
    ]}
);