 // API Fetch
 useEffect(() => {
    const fetchItems = async () => {
      const results = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${interval}&offset=${offset}`)
      const data = await results.json()
      const pokeNames = await data.results.map(pokemon => pokemon.name)

      const pokemon = await Promise.all(
        pokeNames.map(async pokemon => {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}` 
            
            const response = await fetch(url);
            const data = await response.json();
            
            return {
                name: data.name,
                id: data.id,
                image: data.sprites['front_default'],
                backImage: data.sprites['back_default'],
                weight: data.weight,
                height: data.height,
                hp: data.stats[0]['base_stat'],
                attack: data.stats[1]['base_stat'],
                defence: data.stats[2]['base_stat'],
                specialAttack: data.stats[3]['base_stat'],
                specialDefence: data.stats[4]['base_stat'],
                speed: data.stats[5]['base_stat'],
                type: data.types.map( type => type.type.name)
                // .join(', ') // joining the array into a string, this is optional
            };
          }
        )
      );
      
      setTempPokedex(pokemon)
      setIsLoading(false)
    }

    fetchItems()
  }, [offset]);