import { Colors } from "@/constants/Colors";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "@/constants/dimension";
import { IProductData } from "@/utils/main";
import { Feather } from "@expo/vector-icons";
import { Modal, Pressable, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

const DetailsModal = ({ visible, onClose, data }: {visible: boolean, onClose: () => void, data: IProductData}) => {
    return (
      <Modal
        visible={visible}
        onRequestClose={onClose}
        transparent
        animationType='slide'
        statusBarTranslucent
      >
        <View style={styles.container}>
            <View style={styles.content}>
                {/* Header with close button */}
                <View style={styles.header}>
                    <Text style={styles.title}>{data.name}</Text>
                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <Feather name="x" size={24} color={Colors.light.secondaryText} />
                    </TouchableOpacity>
                </View>

                {/* Product Image */}
                <Image 
                    source={data.image} 
                    style={styles.productImage}
                    resizeMode="cover"
                />

                {/* Product Details */}
                <View style={styles.detailsContainer}>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Brand:</Text>
                        <Text style={styles.detailValue}>{data.brandName}</Text>
                    </View>

                    <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Manufacturer:</Text>
                        <Text style={styles.detailValue}>{data.manufacturerInBangladesh}</Text>
                    </View>

                    <View style={styles.descriptionContainer}>
                        <Text style={styles.descriptionLabel}>Why Boycott?</Text>
                        <Text style={styles.descriptionText}>{data.israelRelatedPerception}</Text>
                    </View>
                </View>

                {/* Action Buttons */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.secondaryButton}>
                        <Text style={styles.secondaryButtonText}>Learn More</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.primaryButton}>
                        <Text style={styles.primaryButtonText}>Share</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    content: {
        width: SCREEN_WIDTH * 0.9,
        height: SCREEN_HEIGHT * 0.8,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: Colors.light.text,
        flex: 1,
    },
    closeButton: {
        padding: 8,
    },
    productImage: {
        width: '100%',
        height: SCREEN_HEIGHT * 0.3,
        borderRadius: 12,
        marginBottom: 20,
    },
    detailsContainer: {
        marginBottom: 20,
    },
    detailRow: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    detailLabel: {
        fontWeight: '600',
        color: Colors.light.text,
        width: 120,
    },
    detailValue: {
        flex: 1,
        color: Colors.light.text,
    },
    descriptionContainer: {
        marginTop: 15,
    },
    descriptionLabel: {
        fontWeight: '600',
        color: Colors.light.text,
        marginBottom: 5,
    },
    descriptionText: {
        color: Colors.light.text,
        lineHeight: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 'auto',
    },
    primaryButton: {
        backgroundColor: Colors.light.tint,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        flex: 1,
        marginLeft: 10,
    },
    primaryButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    secondaryButton: {
        borderWidth: 1,
        borderColor: Colors.light.tint,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        flex: 1,
        marginRight: 10,
    },
    secondaryButtonText: {
        color: Colors.light.tint,
        fontWeight: 'bold',
    },
});

export default DetailsModal;