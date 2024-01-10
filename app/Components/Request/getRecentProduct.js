function convertUnixTimestamp(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  });
}

//'Cookie': 'v_sid=df024aff9eb5512c1f9b3974afdd79a8; _vinted_fr_session=aUxXTjdLUytIQTIzWEszNjBpd2lkUFpHZmlvTmlmbEtPL1Bnc3RWaStjakJDV0tJbUFVSlVTd1VJM0hQWUg5YmJwUmFjUUZaemk4dGtqcFNVazV5S21KYkZhaERtZlFydVN5QnFBZHBibWJJRG5IMFFoSXJPQjdjdUlhUFNlYjBQb0hOaHdac2FFT054MXBoTUZNU0NWbzRDSzFmUkNsdkhvMjhUVytTMkxUT3VUcEt2YnExL1VUNWZQdWdxM3NwRHJjRy9xeG01c0lRWmhVMXJIb3hrcklncWwwTEdFTTRUZ3VmNit5aG9COWFiTGVxcWUvSnZSZ2JyazhSZWFHWWh6OGJKMGZJMVQ4dDIrYXh6b2dwM3pNSkNjVXkxRHpEM3g0Wkl6K3RRZW5NTTlBYVlqVkhUc0xydGtUbHBEZFRlM0NkemNSTS9QaC9KYXE1VHM1Z2xtSXVZNDY0bnJwdisxVlNIVkVnRDZkMlBrWEdTeHRVcE1aNCtqcW9jMFVaaEdMdDBITjlOelpVS3oyRXA4MlpoaFRzNnZkejUxREhTWmFpS0ZhMFM0SzU2Wjh1RHdBNHMzVTRMbkhGNUd2SFA0cEthQUpnWVpYNDB4SHdCRUZMeTZXWnU1UnRyQTdyU2o1OVRSYXZkWTY1bWhPZUl2cEM1VFZuNC9nNVQxa212Q3NCME9BcDliUGZLVWozQVNLZDhDY21HYWxVK1NyUWl5TUtFaVNkWUFnV0xkOVBPTUpVQ2RIYitZdng0TzUvdnhLQ1ZNUVRCUkkyRGVjMkI4OVFRNGMzeXhaR0N6N2JUTWhXOXB6dDNSc24rL3FtdmdqZEsvbkpaWGVpQnJpS1lKVnErU2RnaWZHN1UxZC96OG1mUnorRmgrSWVOaTNOVnNoS0Q1M2ZITU55OEN6RjJYaE9RT1BJQ3dVNEkxWTl3TG1EZG9BZXNEajBGOGRYZlVXVlZsOXBTSCtDcWF4bnhtclFUWVRxS1BjZ2wvY1NFT01sRzhpQVE4RTRYVWRiTUhrOEFpVE0zRDJSNTdmMVQzVjR2MzVMd2t2RXBIakxqQStMamdZZjVWWTM1NjR6K1NOcDVjbkR6MHFqdXk3aFRHcXhoaVZIRHlRanA4VHl2azVLc0pDYmVkL21yUDJESVNNTFkxT3cxUmhGOXAwSXd2cjlOZnU5Zk90eDJIRGJ2THhHamNRUzFERGxWZi9HcTJFVkVwUjVEZEZwanFkWjdmMFJrNDJKem5Fa0l1VlBWc3B6Q0RJMDNuaERWU0EzaXQwaC9ud1NnZDIxZWxEN3Avc01KRjdQTURUNjA4SE1aN2prZlN0eEhka2M2SVFKTkd6K2lsbnoybG95U3E3ZmtIUGJDci9RZTRYcDdkN1VGSVNzeC9pYzliS0F2aW1LRm50NC9makd1R0FxV0h0ZGpJZVNZOXJxMTFjeFR2dUhleE9hS0Y4Y2JJZEhQT2JWcDdCYkxjV1VITWdBaC9qbEs1MmhtSE1xVkFlSGs0MHBtSVJENnIzbU9RamVsSHRXWVpQMThVQVlBTTJSb0VoRjNxa0NYbm1HN1preGxQMUFKbjVMaUdtdTI3aDVzYWxmN1F4djBadkM2YkdwUnh1dGovSmJZaFdCc2hSWkhPN1Z4QzFtU3hxUTJiN3M3NXZSMytua2pndjlnYjgvaElWWkVzdmNaSVhRT0xNWFlGa2JNWXg4K29zay9nOWxoSzRZYmRlK1VJeVEyUjF0QXNtSUc5YU1UeXZLQ2h5UGFkaTlwcldkdS9HK2RyM1JZZUZTU05OcHZZUHNpTkJoZ2RWRzhLQUI2L053dEZHdFVvdnZMMjlpZHRsb0QzdnJrV3VIREpqdGdKNnNpR2l5YytqcmtzK1BnSGIzMTNoaTRHTjdsKzQ2N1lFNmhoRXZkZm0wQmpwNTVHWDliYnVZeDhuZzRhblRMdkV6NUNGdVF6eVNycEFKemkyQ0lsZnBTOVdJek9IVmdTVjhNRWYwTXR5WjhNazFwTHYvOHpvRHNwVkExWGlJK1JwRGQ4T2Nla242THJFU1YwM25CSmtNUk5IbytKTy8xSVcybVJ3RlhnbHl5d09GVUVneXBUMmF6SSszZG5HTExaaU5rS1dJdE1pOVdwY0tyb2JkUmFqWUs2U2hqUE94aERYSDEyQlAwUzJZNXdjVzNUUTZockRrbzBOVzlXZS9DckJadE1MaUFRRlpXL3ZhWXI3V0ltZXZ3NXlDSUpsTzd0ZzlhZkVGejNORXJHTkN3bVNaajR4aExDbE9mTWl2M0Ira3JnT2t5MGZqLS1WSGJqM05xL3hxWHhBZ2RiMzRIVGN3PT0%3D--79cf9b2220651c7c26c90ed476dbf71a734b2691; v_udt=TUc2NTZEVytGdGpPaEt4Q245UlJ0dU5QcmZhWS0tRnJ1MFkvQTJqdGRmTUg1Ky0tc0VmYStoOS9YanU0Mi81YUJPZTVSdz09; anon_id=689b9609-a9ad-447c-aa4d-57da9989a07c; anonymous-locale=fr; __cf_bm=dxFPNNRwg0ToELwqlTgp03On7qZSmrJqFTHYCdUT19s-1703948264-1-Ae96l8LAu5uzNQgrApvzdgJCICgNUWMDhgSYAzUeFvgUziPCre++zp+0yUDNns9QADbxLa5HSecGPXz6HIw2HTA4ZjqJ96y2jOU6q1nq9N5s'

export default function GetRecentProducts(brand, price) {
  return new Promise((resolve, reject) => {
    fetch(`https://www.vinted.fr/api/v2/catalog/items?page=1&per_page=96&search_text=${brand}&catalog_ids=&price_to=${price}&currency=EUR&color_ids=&brand_ids=&size_ids=&material_ids=&video_game_rating_ids=&status_ids=&order=newest_first`, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur réseau : ' + response.status);
        }
        return response.json();
      })
      .then(data => {
        try {
          const timestamp = Date.now();
          const formattedDate = convertUnixTimestamp(timestamp);

          const productInfo = {
            title: data.items[0].title,
            details: {
              price: data.items[0].price + '€',
              brand_title: data.items[0].brand_title,
              url: data.items[0].url,
              size: data.items[0].size_title,
              status: data.items[0].status,
              photo: data.items[0].photo.url,
              date: formattedDate
            }
          };

          resolve(productInfo); 

        } catch (error) {
          reject(error); 
        }
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données :', error);
        reject(error); 
      });
  });
}
