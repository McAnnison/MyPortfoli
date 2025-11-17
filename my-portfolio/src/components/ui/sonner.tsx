import { Toaster } from 'sonner'

export function ToasterWrapper(props: Parameters<typeof Toaster>[0]) {
  return <Toaster {...(props as any)} />
}

export { ToasterWrapper as Toaster }
