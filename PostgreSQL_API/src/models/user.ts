import bcrypt from 'bcrypt';




// async create(u: User): Promise {
//     try{
//     const conn = await Client.connect()
//     const sql = 'INSERT INTO users(first_name,last_name,username);'
//     const hash = bcrypt.hashSync(
//         u.password + pepper,
//         parseInt(saltRounds)
//     );
//     const result = await conn.query(sql,[u.username, hash])
//     const user = result.rows[0]
//     conn.release()

//     return user

//     }catch (error){
    
//     }
// }

// async create(u: User): Promise<User> {
//     try {
//       // @ts-ignore
//       const conn = await Client.connect()
//       const sql = 'INSERT INTO users (username, password_digest) VALUES($1, $2) RETURNING *'

//       const hash = bcrypt.hashSync(
//         u.password + pepper, 
//         parseInt(saltRounds)
//       );

//       const result = await conn.query(sql, [u.username, hash])
//       const user = result.rows[0]

//       conn.release()

//       return user
//     } catch(err) {
//       throw new Error(`unable create user (${u.username}): ${err}`)
//     } 
//   }


// : Promise<User | null>
// async authenticate(username: string, password: string) {
//     const conn = await Client.connect()
//     const sql = 'SELECT password_digest FROM users WHERE username=($1)'

//     const result = await Connection.query(sql, [username])
//     console.log(password+pepper)

//     if(result.rows.length) {
//         const user = result.rows[0]
//         console.log(user)

//         if(bcrypt.compareSync(password+pepper, user.password_digest)) {
//             return user
//         }
//         return null
//     }
// }



// async authenticate(username: string, password: string): Promise<User | null> {
//     const conn = await Client.connect()
//     const sql = 'SELECT password_digest FROM users WHERE username=($1)'

//     const result = await conn.query(sql, [username])

//     console.log(password+pepper)

//     if(result.rows.length) {

//       const user = result.rows[0]

//       console.log(user)

//       if (bcrypt.compareSync(password+pepper, user.password_digest)) {
//         return user
//       }
//     }

//     return null
//   }