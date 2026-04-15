import React, { useEffect, useRef, useState } from 'react'
import { Button } from '@alfalab/core-components-button'

type ListModule = typeof import('@alfalab/core-components-list')

const mobileMode = require('@alfalab/core-components-themes/mobile') as string
const darkMode = require('@alfalab/core-components-themes/dark') as string
const LIST_VERSION = '5.0.1'

export const View = () => {
  const [counter, setCounter] = useState(0)
  const [isDarkThemeEnabled, setIsDarkThemeEnabled] = useState(false)
  const [isListVisible, setIsListVisible] = useState(false)
  const [listModule, setListModule] = useState<ListModule | null>(null)
  const [isLoadingList, setIsLoadingList] = useState(false)
  const [baselineValue, setBaselineValue] = useState('')

  const firstShowWasHandledRef = useRef(false)

  useEffect(() => {
    setBaselineValue(
      getComputedStyle(document.documentElement)
        .getPropertyValue('--color-light-text-primary')
        .trim(),
    )
  }, [])

  const handleIncrement = () => {
    setCounter((prev) => prev + 1)
  }

  const handleToggleTheme = () => {
    setIsDarkThemeEnabled((prev) => !prev)
  }

  const handleToggleList = async () => {
    if (isListVisible) {
      setIsListVisible(false)
      return
    }

    if (listModule) {
      setIsListVisible(true)
      return
    }

    setIsLoadingList(true)

    try {
      const mod = await import('@alfalab/core-components-list')
      setListModule(mod)
      setIsListVisible(true)

      if (!firstShowWasHandledRef.current) {
        firstShowWasHandledRef.current = true

        const cssVarValue = getComputedStyle(document.documentElement)
          .getPropertyValue('--color-light-text-primary')
          .trim()

        const isReproduced = cssVarValue !== baselineValue

        console.log(
          '[List theme bug check]',
          JSON.stringify(
            {
              activeTheme: isDarkThemeEnabled ? 'dark' : 'default',
              reproduced: isReproduced ? 'воспроизвелось' : 'не воспроизвелось',
              cssVarName: '--color-light-text-primary',
              cssVarValue,
              baselineCssVarValue: baselineValue,
              bodyBackgroundColor: getComputedStyle(document.body).backgroundColor,
              bodyTextColor: getComputedStyle(document.body).color,
              listVersion: LIST_VERSION,
            },
            null,
            2,
          ),
        )
      }
    } finally {
      setIsLoadingList(false)
    }
  }

  const List = listModule?.List

  return (
    <>
      <style>{mobileMode}</style>
      {isDarkThemeEnabled ? <style>{darkMode}</style> : null}

      <style>
        {`
          body {
            background: var(--color-light-base-bg-secondary);
            color: var(--color-light-text-primary);
            margin: 16px;
          }
        `}
      </style>

      <p>Вы кликнули {counter} раз(а)</p>

      <Button onClick={handleIncrement}>Нажми на меня</Button>

      <div style={{ marginTop: 12 }}>
        <Button onClick={handleToggleTheme}>
          {isDarkThemeEnabled ? 'Выключить dark theme' : 'Включить dark theme'}
        </Button>
      </div>

      <div style={{ marginTop: 12 }}>
        <Button onClick={handleToggleList} disabled={isLoadingList}>
          {isListVisible ? 'Скрыть List' : 'Показать List'}
        </Button>
      </div>

      {isListVisible && List ? (
        <div style={{ marginTop: 12 }}>
          <List>
            <List.Item>Текст внутри List</List.Item>
            <List.Item>Еще один пункт</List.Item>
          </List>
        </div>
      ) : null}
    </>
  )
}
