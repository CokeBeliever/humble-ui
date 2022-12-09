## Common CSS var - 通用 CSS 变量

> :warning:注意！
>
> * namespace: hu

--{namespace}-color-while: #ffffff

--{namespace}-color-black: #000000

### Colors - 颜色

* primary: #409eff
* success: #67c23a
* warning: #e6a23c
* danger: #f56c6c
* error: #f56c6c
* info: #909399

--{namespace}-color-{type}-rgb: {value}



### Typography - 字体排版

#### font-size - 字体大小

* extra-large: 20px
* large: 18px
* medium: 16px
* base: 14px
* small: 13px
* extra-small: 12px

--{namespace}-font-size-{type}: {value}



#### font-family - 字体族

* default: "'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif"

--{namespace}-font-family-{type}: {value}



#### font-weight - 字体分量

* primary: 500

--{namespace}-font-weight-{type}: {value}



#### font-line-height - 字体行高

* primary: 24px

--{namespace}-font-line-height-{type}: {value}



### z-index

* normal: 1
* top: 1000
* popper: 2000

--{namespace}-z-index-{type}: {value}



### border-radius - 边框圆角

* base: 4px
* small: 2px
* round: 20px
* circle: 100%

--{namespace}-border-radius-{type}: {value}



### Transition - 过渡

#### transition-duration - 过渡持续时间

* default: 0.3s

* fast: 0.2s

--{namespace}-transition-duration-{type}: {value}



#### transition-function - 过渡函数

* ease-in-out-bezier: cubic-bezier(0.645, 0.045, 0.355, 1)
* fast-bezier: cubic-bezier(0.23, 1, 0.32, 1)

--{namespace}-transition-function-{type}: {value}



#### transition - 过渡

* all: all var(--{namespace}-transition-duration-default) var(--{namespace}-transition-function-ease-in-out-bezier)
* fade: opacity var(--{namespace}-transition-duration-default) var(--{namespace}-transition-function-fast-bezier)
* md-fade: transform var(--{namespace}-transition-duration-default) var(--{namespace}-transition-function-fast-bezier), opacity var(--{namespace}-transition-duration-default) var(--{namespace}-transition-function-fast-bezier)
* fade-linear: opacity var(--{namespace}-transition-duration-fast) linear
* border: border-color var(--{namespace}-transition-duration-fast) var(--{namespace}-transition-function-ease-in-out-bezier)
* box-shadow: box-shadow var(--{namespace}-transition-duration-fast) var(--{namespace}-transition-function-ease-in-out-bezier)
* color: color var(--{namespace}-transition-duration-fast) var(--{namespace}-transition-function-ease-in-out-bezier)

--{namespace}-transition-{type}: {value}



### component-size - 组件大小

* large: 40px
* default: 32px
* small: 24px

--{namespace}-component-size-{type}: {value}

