import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react'

import BasicInHooks from './components/BasicInHooks'
import BasicInClass from './components/BasicInClass'
import SimpleInHooks from './components/SimpleInHooks'

export default function Home() {
  const [pageName, setPageName] = useState('simple-in-hooks')

  return (
    <div className={styles.container}>
      <Head>
        <title>Next App WangEditor V5</title>
        <meta name="description" content="Next App WangEditor V5" />
        <link href="https://cdn.bootcdn.net/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://www.wangeditor.com/">WangEditor V5!</a>
        </h1>
        <div style={{ margin: '20px' }}>
          {/* 选择显示哪个 demo 页 */}
          选择要显示的 demo &nbsp;
          <select value={pageName} onChange={e => setPageName(e.target.value)}>
            <option value="">置空</option>
            <option value="simple-in-hooks">simple-in-hooks</option>
            <option value="basic-in-hooks">basic-in-hooks</option>
            <option value="basic-in-class">basic-in-class</option>
          </select>
          <hr />
          {/* 按条件显示 demo 页 */}
          {pageName === 'basic-in-hooks' && <BasicInHooks />}
          {pageName === 'basic-in-class' && <BasicInClass />}
          {pageName === 'simple-in-hooks' && <SimpleInHooks />}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.wangeditor.com/"
          target="_blank"
          rel="noreferrer"
        >
          Copyright © wangEditor.com (2017 - present) all right reserved
        </a>
      </footer>
    </div>
  )
}
