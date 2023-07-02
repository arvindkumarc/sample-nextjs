"use client";
import styles from './page.module.css'

const UserRow = (user) => {
  return <div>
    <div>{user.id}</div>
    <div>{user.name}</div>
    <div>{user.age}</div>
    <div>{user.gender}</div>
  </div>
}

// http://localhost:3000/api/users
export default function Home() {
  return (
    <main className={styles.main}>
      <table className={styles.table}>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
        <tr className={styles.row}>
          <td>1</td>
          <td>Stephen</td>
          <td>30</td>
          <td>M</td>
        </tr>
      </table>
    </main>
  )
}
