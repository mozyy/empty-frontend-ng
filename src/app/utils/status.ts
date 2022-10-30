const icps = [
  {host: 'yyuck.com',name: 'yyuck爱生活', no: '蜀ICP备2021007564号-2'},
  {host: 'yyue.vip',name: 'yyue的个人', no: '蜀ICP备2021007564号-1'},
]
export const getIcp = (host: string) => {
  return icps.find(icp => host.includes(icp.host)) || icps[0]
}