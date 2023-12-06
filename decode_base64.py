import base64

encoded_String = 'RnJhbmNpcw=='

decoded_bytes = base64.b64decode(encoded_String)

decoded_String = decoded_bytes.decode('utf-8')

print(decoded_String)