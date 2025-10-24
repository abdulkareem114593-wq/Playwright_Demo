import { test, expect } from '@playwright/test';

test.describe('Create Notes API Testing', () => {
  const baseUrl = 'https://practice.expandtesting.com'
  let token: string
  let Id: string

  test.beforeAll(async ({ request }) => {
    const response = await request.post(`${baseUrl}/notes/api/users/login`, {
        data: {
          "email": "abdul.163@gmail.com",
          "password": "AKMD@163#",
        },
      })
      const responseBody = JSON.parse(await response.text())
      expect(response.status()).toBe(200)
      expect(responseBody.data.token).toBeTruthy()
      token = responseBody.data.token
      console.log(token)
  })
  test('POST Request - Create Notes', async ({ request }) => {
    const response = await request.post(`${baseUrl}/notes/api/notes`, {

        headers: {
          'x-auth-token': `${token}`,
        },
        data:
          {     
              title: "OG Dialogue",
              description: "Killing it up Brutal",
              category: "Personal",
              completed : true
            },
     
    })
    expect(response.status()).toBe(200)
    const responseBody = JSON.parse(await response.text())
    console.log(responseBody)
    Id=responseBody.data.id
    expect(responseBody.message).toBe('Note successfully created')
    expect(responseBody.data.title).toBe('OG Dialogue')
 
    })

    test('DELETE Request - Update Notes', async ({ request }) => {
         const response = await request.delete(`${baseUrl}/notes/api/notes/${Id}`, {
  
          headers: {
            'x-auth-token': `${token}`,
          },
        //   data:
        //   {     
        //       title: "OG Dialogue original",
        //       description: "Killing it up Brutal",
        //       category: "Personal",
        //       completed : true
        //     },
      })
      expect(response.status()).toBe(200)
      const responseBody = JSON.parse(await response.text())
      console.log(responseBody)
      expect(responseBody.message).toBe('Note successfully deleted')
      //expect(responseBody.data.title).toBe('OG Dialogue')
   
      })

      
})