import { View, Text } from 'react-native'
import { useState } from 'react'
import { EthPrice, NFTTitle } from './SubInfo'
import { COLORS, SIZES, FONTS } from '../constants'

const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100))
  const [readMore, setReadMore] = useState(false)
  const handleDescription = () => {
    if (!readMore) {
      setText(data.description)
      setReadMore(true)
    } else {
      setText(data.description.slice(0, 100))
      setReadMore(false)
    }
  }
  return (
    <>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />
        <EthPrice
          price={data.price}
        />
      </View>
      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.font, color: COLORS.primary }}>Descriptipn</Text>
        <View style={{ marginTop: SIZES.base }}>
          <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.small, color: COLORS.secondary, lineHeight: SIZES.large }}>
            {text}
            {!readMore && '...'}
            <Text
              style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.small, color: COLORS.primary }}
              onPress={handleDescription}
            >
              {readMore ? ' Show Less' : ' Read More'}
            </Text>
          </Text>
        </View>
      </View>
    </>
  )
}

export default DetailsDesc