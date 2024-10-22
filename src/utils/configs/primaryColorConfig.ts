export type PrimaryColorConfig = {
  name?: string
  light?: string
  main: string
  dark?: string
}

// Primary color config object
const primaryColorConfig: PrimaryColorConfig[] = [
  {
    name: 'primary-1',
    light: '#00ff00',
    main: 'rgba(218, 150, 148, 1)',
    dark: '#0000ff'
  }
];

export default primaryColorConfig;
