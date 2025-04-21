import { StyleSheet } from '@react-pdf/renderer'

export const styles = StyleSheet.create({
    page: {
        backgroundColor: '#f4f4f5',
        padding: 20,
    },
    borderContainer: {
        border: '1px solid black',
        borderRadius: 5,
        padding: 20,
        height: "100%",
    },  
    header: {
        marginBottom: 16,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 50,
        height: 50,
    },
    siteName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0a84ff',
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#111',
    },
    timestamp: {
        textAlign: 'center',
        fontSize: 10,
        color: '#666',
        marginBottom: 20,
    },
    section: {
        marginBottom: 25,
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 6,
    },
    eyeTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 7,
    },
    disease: {
        color: '#e6005c',
        fontWeight: 'bold',
        marginBottom: 7,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 5
    },
    accuracyWrapper: {
        marginBottom: 10,
    },
    accuracyBarContainer: {
        height: 11,
        backgroundColor: '#d3d3d3',
        borderRadius: 5,
        overflow: 'hidden',
        marginLeft: 7,
        marginVertical: 4,
    },
    descriptionBox: {
        marginTop: 4,
    },
    descriptionText: {
        fontSize: 11,
        marginTop: 2,
        marginLeft: 7,
        color: '#333',
    },
    imageSection: {
        marginBottom: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        borderRadius: 8,
        border: '1pt solid #ccc',
        margin: '0 auto',
    },
})