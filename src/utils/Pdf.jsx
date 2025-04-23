import { Document, Image, Page, Text, View } from '@react-pdf/renderer'
import { styles } from './PdfStyle'
import React from 'react'
import AccuracyBar from './AccuracyBar';
import { diseaseDescription } from './data';

const Pdf = ({ leftEye, rightEye, image, singleEye }) => {
    const timestamp = new Date().toLocaleString()

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.borderContainer}>
                    {/* Logo and Website Name */}
                    <View style={styles.header}>
                        <Image style={styles.logo} src={'/logo.png'} />
                        <Text style={styles.siteName}>DeepSightX</Text>
                    </View>

                    {/* Title and Timestamp */}
                    <Text style={styles.title}>Diagnosis Result</Text>
                    <Text style={styles.timestamp}>Generated on: {timestamp}</Text>

                    <View style={styles.imageSection}>
                        <Image style={styles.image} src={image} />
                    </View>

                    {/* SINGLE EYE */}
                    {singleEye && (
                        <View style={styles.section}>
                            <Text style={styles.eyeTitle}>EYE:</Text>
                            <Text style={styles.disease}>Detected: {singleEye.class.split("_").join(" ")}</Text>
                            <View style={styles.accuracyWrapper}>
                                <Text>
                                    <Text style={styles.label}>Accuracy:</Text>{' '}
                                    {Math.round(singleEye.confidence * 100)}%
                                </Text>
                                <AccuracyBar value={singleEye.confidence} />
                            </View>
                            <View style={styles.descriptionBox}>
                                <Text style={styles.label}>Description:</Text>
                                <Text style={styles.descriptionText}>{diseaseDescription.find((element) =>element.name == singleEye.class)?.description}</Text>
                            </View>
                        </View>
                    )}

                    {/* LEFT EYE */}
                    {leftEye && (
                        <View style={styles.section}>
                            <Text style={styles.eyeTitle}>LEFT EYE:</Text>
                            <Text style={styles.disease}>Detected: {leftEye.class.split("_").join(" ")}</Text>
                            <View style={styles.accuracyWrapper}>
                                <Text>
                                    <Text style={styles.label}>Accuracy:</Text>{' '}
                                    {Math.round(leftEye.confidence * 100)}%
                                </Text>
                                <AccuracyBar value={leftEye.confidence} />
                            </View>
                            <View style={styles.descriptionBox}>
                                <Text style={styles.label}>Description:</Text>
                                <Text style={styles.descriptionText}>{diseaseDescription.find((element) =>element.name == leftEye.class)?.description}</Text>
                            </View>
                        </View>
                    )}

                    {/* RIGHT EYE */}
                    {rightEye && (
                        <View style={styles.section}>
                            <Text style={styles.eyeTitle}>RIGHT EYE:</Text>
                            <Text style={styles.disease}>Detected: {rightEye.class.split("_").join(" ")}</Text>
                            <View style={styles.accuracyWrapper}>
                                <Text>
                                    <Text style={styles.label}>Accuracy:</Text>{' '}
                                    {Math.round(rightEye.confidence * 100)}%
                                </Text>
                                <AccuracyBar value={rightEye.confidence} />
                            </View>
                            <View style={styles.descriptionBox}>
                                <Text style={styles.label}>Description:</Text>
                                <Text style={styles.descriptionText}>{diseaseDescription.find((element) =>element.name == rightEye.class)?.description}</Text>
                            </View>
                        </View>
                    )}
                </View>
            </Page>
        </Document>
    )
}
export default Pdf