import React, {useState, useEffect}  from 'react'
import {View, Text, StyleSheet, FlatList, Image} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import yelp from '../api/yelp'

const ResultShowScreen = ({route}) => {
  const id = route.params.id
  const [result, setResult] = useState(null)
  const [review, setReview] = useState(null)

  const getResults = async (id) => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
  }

  const getReviews = async (id) => {
    const response = await yelp.get(`/${id}/reviews`)
    setReview(response.data)
  }

  const renderReview = (item) => (
    <View style={styles.review}>
      <Text style={{fontSize: 16, fontWeight: 'bold', color: '#333'}}>{item.user.name}</Text>
      <Text style={{fontSize: 12, color: '#333'}}>{item.text}</Text>
    </View>
  )

  useEffect(() => {
    getResults(id)
    getReviews(id)
  }, [])

  if (!result) {
    return null
  }

  if (!review) {
    return null
  }

  return <View style={{margin: 15}}>
    <Text style={styles.title}>{result.name}</Text>
    <Text style={styles.location}>{result.location.address1} {result.location.address2} {result.location.address3}</Text>
    <Text style={styles.location}>{result.location.city} {result.location.country}</Text>
    <FlatList
      data={result.photos}
      keyExtractor={(photo) => photo}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => {
        return <Image style={styles.image} source={{ uri: item}} />
      }} 
    />
    <FlatList
      data={result.categories}
      keyExtractor={(categories) => categories.alias}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => {
        return <Text style={styles.categories}>{item.title}</Text>
      }} 
    />
    <View style={styles.rating}>
      <AntDesign name="star" style={styles.star} />
      <Text style={styles.rate}><Text style={{fontWeight: 'bold'}}>{result.rating}</Text> ({result.review_count} Reviews)</Text>
      <AntDesign name="mobile1" style={styles.star} />
      <Text style={styles.rate}>{result.display_phone}</Text>
    </View>
    <View style={styles.reviews}>
      <Text style={{marginBottom: 5, fontSize: 14}}>Users Review</Text>
      <FlatList
        data={review.reviews}
        keyExtractor={(review) => review.text}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => renderReview(item)}
      />
    </View>
  </View>
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333'
  },
  location: {
    fontSize: 18,
    color: '#34495e'
  },
  image: {
    height: 200,
    width: 300,
    borderRadius: 5,
    marginRight: 10,
    marginTop: 10,
  },
  categories: {
    borderRadius: 5,
    borderColor: '#e74c3c',
    marginRight: 5,
    marginTop: 10,
    borderWidth: 1,
    padding: 5,
    color: '#333'

  },  
  rating: {
    marginTop: 10,
    flexDirection: 'row',
  },
  star: {
    fontSize: 25,
    alignSelf: 'center',
    marginRight: 5,
    color: '#e74c3c',
  }, 
  rate: {
    marginTop: 4,
    marginRight: 5,
  },
  reviews: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#e74c3c',
    borderRadius: 5,
    padding: 5,
  },
  review: {
    flexDirection: 'column',
    marginTop: 10
  }
})

export default ResultShowScreen