/**
 * Created by feng.shen on 2018/11/27.
 */
// 此文件是 git 相关的操作的文件, 由于脚手架的核心功能就是获取项目的 github 地址, 并下载, 所以我的 Git 类规划了以上几个功能, 获取项目列表 获取项目版本号列表 获取项目地址 下载项目, 虽然后两个功能在这一节还用不到, 我也先留下了代码桩

import request from './request'
import { orgName } from '../../config'

class Git {
  constructor() {
    this.orgName = orgName;
  }

  getProjectList() {
    return request(`/orgs/${this.orgName}/repos`);
  }

  getProjectVersions(repo) {
    return request(`/repos/${this.orgName}/${repo}/tags`);
  }

  getProjectUrl() {

  }

  downloadProject() {

  }
}

export default Git;