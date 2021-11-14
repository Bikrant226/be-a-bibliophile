import React from 'react';
import GooglePayButton from  '@google-pay/button-react';


function GooglePayComponent(props) {
    return (
        <GooglePayButton
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: 'CARD',
              parameters: {
                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                allowedCardNetworks: ['MASTERCARD', 'VISA'],
              },
              tokenizationSpecification: {
                type: 'PAYMENT_GATEWAY',
                parameters: {
                  gateway: 'example',
                  gatewayMerchantId: 'exampleGatewayMerchantId',
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: 'BCR2DN6TY7NKN3JJ',
            merchantName: 'Bik',
          },
          transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPriceLabel: 'Total',
            totalPrice: props.totalPrice,
            currencyCode: 'INR',
            countryCode: 'IN',
          },
        }}
        onLoadPaymentData={paymentRequest => {
          console.log('load payment data', paymentRequest);
        }}
      />
    )
}

export default GooglePayComponent
