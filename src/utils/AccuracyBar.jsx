import React from 'react'
import { styles } from './PdfStyle';
import { View } from 'lucide-react';

const AccuracyBar = ({ value }) => {
    const percentage = Math.round(value * 100)
    const barColor = percentage >= 70 ? '#22c55e' : percentage >= 40 ? '#facc15' : '#ef4444'
    
    return (
      <View style={styles.accuracyBarContainer}>
        <View style={{ height: '100%', width: `${percentage}%`, backgroundColor: barColor}} />
      </View>
    )
}

export default AccuracyBar