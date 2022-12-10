## Common CSS var - 通用 CSS 变量

> :warning:注意！
>
> * namespace: hu
> * 当 {type} 为 default 时，在实现中 CSS 变量名不会拼接 {type}。

--{namespace}-color-while: #ffffff

--{namespace}-color-black: #000000

### colors - 颜色

* primary: #409eff
* success: #67c23a
* warning: #e6a23c
* danger: #f56c6c
* error: #f56c6c
* info: #909399

--{namespace}-color-{type}-rgb: {red(value), green(value), blue(value)}



### typography - 字体排版

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



### transition - 过渡

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



## Light CSS var - 明亮 CSS 变量

--{namespace}-color-while: #ffffff

--{namespace}-color-black: #000000

### color - 颜色

* primary: #409eff
* success: #67c23a
* warning: #e6a23c
* danger: #f56c6c
* error: #f56c6c
* info: #909399

--{namespace}-color-{type}: {value}

--{namespace}-color-{type}-light-[3,5,7,8,9]: ...

--{namespace}-color-{type}-dark-2: ...



#### bg-color - 背景颜色

* default: #ffffff
* page: #f2f3f5
* overlay: #ffffff

--{namespace}-bg-color-{type}: {value}



#### text-color - 文本颜色

* primary: #303133
* regular: #606266
* secondary: #909399
* placeholder: #a8abb2
* disabled: #c0c4cc

--{namespace}-text-color-{type}: {value}



#### border-color - 边框颜色

* default: #dcdfe6
* light: #e4e7ed
* lighter: #ebeef5
* extra-light: #f2f6fc
* dark: #d4d7de
* darker: #cdd0d6

--{namespace}-border-color-{type}: {value}



#### fill-color - 填充颜色

* default: #f0f2f5
* light: #f5f7fa
* lighter: #fafafa
* extra-light: #fafcff
* dark: #ebedf0
* darker: #e6e8eb
* blank: #ffffff

--{namespace}-fill-color-{type}: {value}



### box-shadow - 盒子阴影

* default: 0px 12px 32px 4px rgba(0, 0, 0, 0.04), 0px 8px 20px rgba(0, 0, 0, 0.08)
* light: 0px 0px 12px rgba(0, 0, 0, 0.12)
* lighter: 0px 0px 6px rgba(0, 0, 0, 0.12)
* dark: 0px 16px 48px 16px rgba(0, 0, 0, 0.08), 0px 12px 32px rgba(0, 0, 0, 0.12), 0px 8px 16px -8px rgba(0, 0, 0, 0.16)

--{namespace}-box-shadow-{type}: {value}



### disable - 禁用

* bg-color: var(--{namespace}-fill-color-light)
* text-color: var(--{namespace}-text-color-placeholder)
* border-color: var(--{namespace}-border-color-light)

--{namespace}-disabled-{type}: {value}



### overlay-color - 覆盖颜色

* default: rgba(0, 0, 0, 0.8)
* light: rgba(0, 0, 0, 0.7)
* lighter: rgba(0, 0, 0, 0.5)

--{namespace}-overlay-color-{type}: {value}



### mask-color - 掩饰颜色

* default: rgba(255, 255, 255, 0.9)
* extra-light: rgba(255, 255, 255, 0.3)

--{namespace}-mask-color-{type}: {value}



### border - 边框

#### border-width - 边框宽度

--{namespace}-border-width: 1px



#### border-style - 边框样式

--{namespace}-border-style: solid



#### border-color-hover - 边框颜色悬停

--{namespace}-border-color-hover: var('--{namespace}-text-color-disabled')



#### border - 边框

--{namespace}-border: var(--{namespace}-border-width) var(--{namespace}-border-style) var(--{namespace}-border-color-default)



### svg

--{namespace}-svg-monochrome-grey: var(--{namespace}-border-color-default)



## Dark CSS var - 黑暗 CSS 变量

### color - 颜色

* primary: #409eff
* success: #67c23a
* warning: #e6a23c
* danger: #f56c6c
* error: #f56c6c
* info: #909399

--{namespace}-color-{type}: {value}

--{namespace}-color-{type}-light-[3,5,7,8,9]: ...

--{namespace}-color-{type}-dark-2: ...



#### bg-color 背景颜色

* default: #141414
* page: #0a0a0a
* overlay: #1d1e1f

--{namespace}-bg-color-{type}: {value}



#### text-color - 文本颜色

$text-color-base: #f0f5ff;

* primary: rgba($text-color-base, 0.95)
* regular: rgba($text-color-base, 0.85)
* secondary: rgba($text-color-base, 0.65)
* placeholder: rgba($text-color-base, 0.55)
* disabled: rgba($text-color-base, 0.4)

--{namespace}-text-color-{type}: {value}



#### border-color - 边框颜色

$border-color-base: #f5f8ff;

* default: rgba($border-color-base, 0.25)
* light: rgba($border-color-base, 0.2)
* lighter: rgba($border-color-base, 0.15)
* extra-light: rgba($border-color-base, 0.1)
* dark: rgba($border-color-base, 0.3)
* darker: rgba($border-color-base, 0.35)

--{namespace}-border-color-{type}: {value}



#### fill-color - 填充颜色

$fill-color-base: #fafcff;

* default: rgba($fill-color-base, 0.12)
* light: rgba($fill-color-base, 0.08)
* lighter: rgba($fill-color-base, 0.04)
* extra-light: rgba($fill-color-base, 0.02)
* dark: rgba($fill-color-base, 0.16)
* darker: rgba($fill-color-base, 0.2)
* blank: transparent

--{namespace}-fill-color-{type}: {value}



### box-shadow - 盒子阴影

* default:  0px 12px 32px 4px rgba(0, 0, 0, 0.36), 0px 8px 20px rgba(0, 0, 0, 0.72)
* light: 0px 0px 12px rgba(0, 0, 0, 0.72)
* lighter: 0px 0px 6px rgba(0, 0, 0, 0.72)
* dark: 0px 16px 48px 16px rgba(0, 0, 0, 0.72), 0px 12px 32px #000000, 0px 8px 16px -8px #000000

--{namespace}-box-shadow-{type}: {value}



### mask-color - 掩饰颜色

* default: rgba(0, 0, 0, 0.8)
* extra-light: rgba(0, 0, 0, 0.3)

--{namespace}-mask-color-{type}: {value}

