const renderProductItem = ({ item }) => (
    <View style={styles.productCard}>
      <Image
        source={{
          uri: item.image || 'https://via.placeholder.com/200',
        }}
        style={styles.productImage}
        onError={(e) => console.warn('Error loading image', e.nativeEvent.error)}
      />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price.toLocaleString()}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      <TouchableOpacity
        style={styles.buyButton}
        onPress={() => handleBuyPress(item)}
      >
        <Text style={styles.buyButtonText}>Comprar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.detailsButton}
        onPress={() => handleProductPress(item)}
      >
        <Text style={styles.detailsButtonText}>Ver detalles</Text>
      </TouchableOpacity>
    </View>
  );
  