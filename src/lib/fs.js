import zalo from './media/zalo.png';
import facebook from './media/facebook.png';
import call from './media/call.png';
export function get_icon(type,color="white",size=16,style={marginRight:"5px",marginBottom:"5px"}){
    switch(type){
        case "volume":
            return <svg  fill={color} width={size} height={size} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M412.6 182c-10.28-8.334-25.41-6.867-33.75 3.402c-8.406 10.24-6.906 25.35 3.375 33.74C393.5 228.4 400 241.8 400 255.1c0 14.17-6.5 27.59-17.81 36.83c-10.28 8.396-11.78 23.5-3.375 33.74c4.719 5.806 11.62 8.802 18.56 8.802c5.344 0 10.75-1.779 15.19-5.399C435.1 311.5 448 284.6 448 255.1S435.1 200.4 412.6 182zM473.1 108.2c-10.22-8.334-25.34-6.898-33.78 3.34c-8.406 10.24-6.906 25.35 3.344 33.74C476.6 172.1 496 213.3 496 255.1s-19.44 82.1-53.31 110.7c-10.25 8.396-11.75 23.5-3.344 33.74c4.75 5.775 11.62 8.771 18.56 8.771c5.375 0 10.75-1.779 15.22-5.431C518.2 366.9 544 313 544 255.1S518.2 145 473.1 108.2zM534.4 33.4c-10.22-8.334-25.34-6.867-33.78 3.34c-8.406 10.24-6.906 25.35 3.344 33.74C559.9 116.3 592 183.9 592 255.1s-32.09 139.7-88.06 185.5c-10.25 8.396-11.75 23.5-3.344 33.74C505.3 481 512.2 484 519.2 484c5.375 0 10.75-1.779 15.22-5.431C601.5 423.6 640 342.5 640 255.1S601.5 88.34 534.4 33.4zM301.2 34.98c-11.5-5.181-25.01-3.076-34.43 5.29L131.8 160.1H48c-26.51 0-48 21.48-48 47.96v95.92c0 26.48 21.49 47.96 48 47.96h83.84l134.9 119.8C272.7 477 280.3 479.8 288 479.8c4.438 0 8.959-.9314 13.16-2.835C312.7 471.8 320 460.4 320 447.9V64.12C320 51.55 312.7 40.13 301.2 34.98z"/></svg>    
        break;
        case "phone":
            return <svg fill={color} width={size} height={size} style={style}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M156.3 195.6c16.84 1.703 33.28-8.139 39.59-23.98L227.6 92.33c6.779-17.39 .25-37.12-15.5-46.89L148.9 5.951c-15.28-9.609-34.87-7.422-47.71 5.391C35.93 76.59 0 163.5 0 255.1c0 92.52 35.93 179.4 101.2 244.6C108.7 508.1 118.5 512 128.4 512c7.031 0 14.12-1.938 20.44-5.938l63.24-39.53c15.81-9.875 22.28-29.59 15.38-46.96L195.9 340.6c-6.312-16-22.75-25.97-39.62-24.06L119.3 320.2c-11.78-41.79-11.78-86.49 0-128.3L156.3 195.6zM92.77 342.5c2.438 7.061 9.467 11.75 16.75 10.75l50.06-4.969c2.375-.375 5.498 1.375 6.592 4.062l31.59 79.02c1.156 2.906 .0313 6.344-2.594 8l-63.31 39.56c-2.562 1.562-5.844 1.281-8.062-.9687C64.59 418.8 31.1 339.1 31.1 255.1c0-83.98 32.59-162.8 91.8-222c1.281-1.297 2.938-1.969 4.594-1.969c1.188 0 2.375 .3438 3.5 1.031l63.28 39.56c2.688 1.672 3.781 5.094 2.656 8L166.2 159.7c-1 2.453-3.404 4.047-6.029 4.047C159.9 163.8 159.5 163.7 159.5 163.7L109.5 158.8c-7.75-.6094-14.31 3.719-16.75 10.75C73.74 225.3 73.74 286.8 92.77 342.5zM401.7 35.2c-7.094-5.25-17.12-3.875-22.41 3.188c-5.312 7.062-3.906 17.09 3.156 22.41C444.4 107.4 480 178.5 480 256c0 77.47-35.56 148.6-97.59 195.2c-7.062 5.312-8.469 15.34-3.156 22.41C382.4 477.8 387.2 480 392 480c3.344 0 6.719-1.031 9.625-3.219C471.8 424.1 512 343.6 512 255.1C512 168.4 471.8 87.91 401.7 35.2zM333.2 98.81c-7.312-5-17.25-3.141-22.25 4.125c-5 7.297-3.156 17.25 4.125 22.25C358.2 154.8 384 203.7 384 256c0 52.25-25.78 101.2-68.94 130.8c-7.281 5-9.125 14.97-4.125 22.25C314 413.6 319 416 324.1 416c3.125 0 6.281-.9062 9.062-2.812C385 377.6 416 318.8 416 255.1C416 193.2 385 134.4 333.2 98.81zM272.1 177.8c-7.875-3.953-17.47-.9219-21.53 6.969c-4.031 7.859-.9062 17.5 6.969 21.53C276.3 215.9 288 234.9 288 256c0 21.09-11.69 40.16-30.47 49.75c-7.875 4.031-11 13.66-6.969 21.53C253.4 332.8 259 336 264.8 336c2.469 0 4.938-.5625 7.281-1.75c29.56-15.09 47.91-45.07 47.91-78.26C319.1 222.8 301.7 192.9 272.1 177.8z"/></svg>
        break;
        case "user":
            return <svg fill={color} width={size} height={size} style={style}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 288c79.53 0 144-64.47 144-144s-64.47-144-144-144c-79.52 0-144 64.47-144 144S176.5 288 256 288zM351.1 320H160c-88.36 0-160 71.63-160 160c0 17.67 14.33 32 31.1 32H480c17.67 0 31.1-14.33 31.1-32C512 391.6 440.4 320 351.1 320z"/></svg>
        break;
        case "menu":
            return <svg fill={color} width={size} height={size} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/></svg>
        break;
        case "cart":
            return <svg fill={color} width={size} height={size} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z"/></svg>
        break;
        case "search":
            return <svg fill={color} width={size} height={size} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/></svg>
        break;
        case "new":
            return <svg fill={color} width={size} height={size} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.123 40.019">
            <g id="Group_3544" data-name="Group 3544" transform="translate(-1134.877 -187.481)">
              <g id="Group_3543" data-name="Group 3543" transform="translate(1134.877 187.481)">
                <path id="Path_2980" data-name="Path 2980" d="M1183.638,220.552l-48.76.48,2.4-18.192,45.522-7.269Z" transform="translate(-1134.877 -187.481)" fill="#ffb600"/>
                <path id="Path_2981" data-name="Path 2981" d="M1140.337,202.351l-3.063.489-2.4,18.192,48.761-.48-.121-3.6C1171.217,219.593,1153.007,216.534,1140.337,202.351Z" transform="translate(-1134.877 -187.481)" opacity="0.2"/>
                <g id="Group_3540" data-name="Group 3540" transform="translate(0.237 12.371)">
                  <path id="Path_2982" data-name="Path 2982" d="M1135.258,207.225l-.019,0a.143.143,0,0,1-.124-.161l.721-5.465a.143.143,0,0,1,.119-.123l10.089-1.621a.143.143,0,0,1,.165.119.145.145,0,0,1-.119.165l-9.983,1.6-.707,5.359A.143.143,0,0,1,1135.258,207.225Z" transform="translate(-1135.114 -199.852)" fill="#ffbc00"/>
                </g>
                <g id="Group_3541" data-name="Group 3541" transform="translate(48.028)">
                  <path id="Path_2983" data-name="Path 2983" d="M1194,194.836l-10.108,2.435,7.841-4.108Z" transform="translate(-1182.905 -187.481)" fill="#ffbc00"/>
                  <path id="Path_2984" data-name="Path 2984" d="M1185.847,194.2l6.7-5.168-1.672-.583Z" transform="translate(-1182.905 -187.481)" fill="#ffbc00"/>
                  <path id="Path_2985" data-name="Path 2985" d="M1185.561,187.481l-2.656,7.239,4.134-6.062Z" transform="translate(-1182.905 -187.481)" fill="#ffbc00"/>
                </g>
                <g id="Group_3542" data-name="Group 3542" transform="translate(36.407 13.071)">
                  <path id="Path_2986" data-name="Path 2986" d="M1171.427,222.417a.144.144,0,0,1,0-.288l13.745-.2-.8-21.23a.143.143,0,0,1,.138-.149.148.148,0,0,1,.149.138l.8,21.378a.14.14,0,0,1-.039.1.147.147,0,0,1-.1.045l-13.892.2Z" transform="translate(-1171.284 -200.551)" fill="#ffbc00"/>
                </g>
                <path id="Path_2987" data-name="Path 2987" d="M1167.675,197.986l14.169-1.383,1.571,17.311-.617-18.343Z" transform="translate(-1134.877 -187.481)" fill="#cc1d1d"/>
              </g>
              <text id="NEW" transform="translate(1146 202.5)" fill="#a81411" fontSize="14" fontFamily="SegoeUI, Segoe UI"><tspan x="0" y="15">NEW</tspan></text>
            </g>
          </svg>
        break;
        case "gift":
            return <svg fill={color} width={size} height={size} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M152 0H154.2C186.1 0 215.7 16.91 231.9 44.45L256 85.46L280.1 44.45C296.3 16.91 325.9 0 357.8 0H360C408.6 0 448 39.4 448 88C448 102.4 444.5 115.1 438.4 128H480C497.7 128 512 142.3 512 160V224C512 241.7 497.7 256 480 256H32C14.33 256 0 241.7 0 224V160C0 142.3 14.33 128 32 128H73.6C67.46 115.1 64 102.4 64 88C64 39.4 103.4 0 152 0zM190.5 68.78C182.9 55.91 169.1 48 154.2 48H152C129.9 48 112 65.91 112 88C112 110.1 129.9 128 152 128H225.3L190.5 68.78zM360 48H357.8C342.9 48 329.1 55.91 321.5 68.78L286.7 128H360C382.1 128 400 110.1 400 88C400 65.91 382.1 48 360 48V48zM32 288H224V512H80C53.49 512 32 490.5 32 464V288zM288 512V288H480V464C480 490.5 458.5 512 432 512H288z"/></svg>
        break;
        case "bg1":
            return <svg fill={color} width={size} height={size} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1366 144.07">
            <g id="Group_2555" data-name="Group 2555" transform="translate(-2 -883.798)">
              <path id="Path_1018" data-name="Path 1018" d="M-6667,8779.849l.237,137.228s116.586,19.033,258.813-7.165,168.112-19.393,216.706-11.389,156.427,30.319,251.545,24.341,112.712-10.229,206.744-26.436c44.413-7.963,80.326-8.652,143.665,2.665s43.768,9.251,96.28,16.225,141.524,9.428,191.772,5.313c.441-25.283.134-140.833.134-140.833Z" transform="translate(6669 -7896)" fill="#a81411"/>
              <path id="Intersection_2" data-name="Intersection 2" d="M475.586,66.933c-48.593-8-74.478-14.809-216.7,11.39S.069,85.488.069,85.488L0,45.672c3.168.705,50.538,11.041,100.867,10.151,52.1-.921,85.809-1.112,172.117-25.839S377.7-2.58,415.328.808,534.6,31.05,561.671,38.471s131.941,30.2,237.477,8.459S950.888-5.27,1014.935.78s118.112,43.2,252.713,54.69c39.879,3.372,74.566-2.713,97.622-3.25.182.031.362.066.539.1-.03,16.175-.095,29.813-.214,36.717-50.248,4.113-139.261,1.661-191.774-5.314s-32.938-4.907-96.279-16.224-99.252-10.628-143.666-2.666C839.845,81.044,822.25,85.3,727.133,91.274c-11.013.692-22.182,1.005-33.424,1C607.853,92.277,518.554,74.01,475.586,66.933Z" transform="translate(2.169 935.589)" fill="#ce2121"/>
              <path id="Intersection_1" data-name="Intersection 1" d="M475.545,35.373c-48.593-8.005-74.479-14.809-216.705,11.388S.026,53.927.026,53.927L0,38.627c3.145-.06,40.968-.84,69.246-4.01C98.771,31.306,175.378,22.942,240.807,8.924s138.122-7.7,182.737,0S600.525,46.341,708.525,41.848,899.651,26.5,969.834,13.147s92.625-20.529,202.48-1.722c159.068,26.209,187.913,27.02,193.4,26.1-.037,8.617-.09,15.619-.166,19.958-50.249,4.116-139.262,1.661-191.774-5.312s-32.939-4.909-96.279-16.226-99.252-10.626-143.664-2.664C839.8,49.484,822.208,53.735,727.09,59.713c-11.013.692-22.183,1-33.424,1C607.81,60.716,518.512,42.449,475.545,35.373Z" transform="translate(2.21 967.15)" fill="#c22323"/>
            </g>
          </svg>
        break;
        case "facebook":
            return <svg fill={color} width={size} height={size} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
        break;
        case "instagram":
            return <svg fill={color} width={size} height={size} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
        break;
        case "youtube":
            return <svg fill={color} width={size} height={size} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
        break;
        case "ping":
            return <svg fill={color} width={size} height={size} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"/></svg>
        break;
        case "5star":
            return <svg fill={color} width={size}  style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160.94 35.453">
            <g id="Group_3621" data-name="Group 3621" transform="translate(-843.166 -1943)">
              <g id="Group_3616" data-name="Group 3616" transform="translate(904.998 1943)">
                <path id="Path_4561" data-name="Path 4561" d="M947.3,1962.688H933.062l18.639,6.056Z" transform="translate(-933.062 -1949.146)" fill="#8e0909"/>
                <path id="Path_4562" data-name="Path 4562" d="M960.16,1971.493Z" transform="translate(-941.522 -1951.895)" fill="#ffdb31"/>
                <path id="Path_4563" data-name="Path 4563" d="M960.16,1971.493h0l11.519,15.855-4.4-13.542Z" transform="translate(-941.522 -1951.895)" fill="#bc1e1e"/>
                <path id="Path_4564" data-name="Path 4564" d="M943.412,1987.347l11.52-8.37v-7.485Z" transform="translate(-936.293 -1951.895)" fill="#bc1e1e"/>
                <path id="Path_4565" data-name="Path 4565" d="M978.8,1962.688H964.56l-4.4,6.056Z" transform="translate(-941.522 -1949.146)" fill="#bc1e1e"/>
                <path id="Path_4566" data-name="Path 4566" d="M960.16,1971.493Z" transform="translate(-941.522 -1951.895)" fill="#ffdb31"/>
                <path id="Path_4567" data-name="Path 4567" d="M960.16,1978.978l11.519,8.37-11.519-15.855Z" transform="translate(-941.522 -1951.895)" fill="#930902"/>
                <path id="Path_4568" data-name="Path 4568" d="M954.932,1971.493l-7.119,2.313-4.4,13.542,11.52-15.855Z" transform="translate(-936.293 -1951.895)" fill="#bc1e1e"/>
                <path id="Path_4569" data-name="Path 4569" d="M953.763,1956.542l4.4,6.056V1943Z" transform="translate(-939.524 -1943)" fill="#bc1e1e"/>
                <path id="Path_4570" data-name="Path 4570" d="M960.16,1943v19.6l4.4-6.056Z" transform="translate(-941.522 -1943)" fill="#8e0909"/>
                <path id="Path_4571" data-name="Path 4571" d="M951.7,1968.744l-18.639-6.056,11.519,8.369,7.119-2.313Z" transform="translate(-933.062 -1949.146)" fill="#9b2400"/>
                <path id="Path_4572" data-name="Path 4572" d="M960.16,1968.744l7.119,2.313,11.52-8.369-18.639,6.056Z" transform="translate(-941.522 -1949.146)" fill="#930902"/>
                <path id="Path_4573" data-name="Path 4573" d="M960.16,1971.493Z" transform="translate(-941.522 -1951.895)" fill="#ffdb31"/>
                <path id="Path_4574" data-name="Path 4574" d="M960.16,1971.493Z" transform="translate(-941.522 -1951.895)" fill="#ffdb31"/>
              </g>
              <g id="Group_3617" data-name="Group 3617" transform="translate(870.157 1954.005)">
                <path id="Path_4575" data-name="Path 4575" d="M892.226,1972.576h-9.818l12.853,4.176Z" transform="translate(-882.407 -1963.238)" fill="#8e0909"/>
                <path id="Path_4576" data-name="Path 4576" d="M901.093,1978.648Z" transform="translate(-888.241 -1965.134)" fill="#ffdb31"/>
                <path id="Path_4577" data-name="Path 4577" d="M901.093,1978.648h0l7.943,10.933L906,1980.243Z" transform="translate(-888.241 -1965.134)" fill="#bc1e1e"/>
                <path id="Path_4578" data-name="Path 4578" d="M889.544,1989.581l7.944-5.771v-5.162Z" transform="translate(-884.635 -1965.134)" fill="#bc1e1e"/>
                <path id="Path_4579" data-name="Path 4579" d="M913.946,1972.576h-9.819l-3.034,4.176Z" transform="translate(-888.241 -1963.238)" fill="#bc1e1e"/>
                <path id="Path_4580" data-name="Path 4580" d="M901.093,1978.648Z" transform="translate(-888.241 -1965.134)" fill="#ffdb31"/>
                <path id="Path_4581" data-name="Path 4581" d="M901.093,1983.81l7.943,5.771-7.943-10.933Z" transform="translate(-888.241 -1965.134)" fill="#930902"/>
                <path id="Path_4582" data-name="Path 4582" d="M897.488,1978.648l-4.909,1.595-3.034,9.338,7.944-10.933Z" transform="translate(-884.635 -1965.134)" fill="#bc1e1e"/>
                <path id="Path_4583" data-name="Path 4583" d="M896.682,1968.338l3.034,4.176V1959Z" transform="translate(-886.863 -1959)" fill="#bc1e1e"/>
                <path id="Path_4584" data-name="Path 4584" d="M901.093,1959v13.514l3.034-4.176Z" transform="translate(-888.241 -1959)" fill="#8e0909"/>
                <path id="Path_4585" data-name="Path 4585" d="M895.26,1976.752l-12.853-4.176,7.943,5.771,4.909-1.595Z" transform="translate(-882.407 -1963.238)" fill="#9b2400"/>
                <path id="Path_4586" data-name="Path 4586" d="M901.093,1976.752l4.909,1.595,7.944-5.771-12.853,4.176Z" transform="translate(-888.241 -1963.238)" fill="#930902"/>
                <path id="Path_4587" data-name="Path 4587" d="M901.093,1978.648Z" transform="translate(-888.241 -1965.134)" fill="#ffdb31"/>
                <path id="Path_4588" data-name="Path 4588" d="M901.093,1978.648Z" transform="translate(-888.241 -1965.134)" fill="#ffdb31"/>
              </g>
              <g id="Group_3618" data-name="Group 3618" transform="translate(952.099 1954.005)">
                <path id="Path_4589" data-name="Path 4589" d="M1011.359,1972.576h-9.818l12.853,4.176Z" transform="translate(-1001.54 -1963.238)" fill="#8e0909"/>
                <path id="Path_4590" data-name="Path 4590" d="M1020.227,1978.648Z" transform="translate(-1007.374 -1965.134)" fill="#ffdb31"/>
                <path id="Path_4591" data-name="Path 4591" d="M1020.227,1978.648h0l7.943,10.933-3.034-9.338Z" transform="translate(-1007.374 -1965.134)" fill="#bc1e1e"/>
                <path id="Path_4592" data-name="Path 4592" d="M1008.677,1989.581l7.944-5.771v-5.162Z" transform="translate(-1003.768 -1965.134)" fill="#bc1e1e"/>
                <path id="Path_4593" data-name="Path 4593" d="M1033.08,1972.576h-9.819l-3.034,4.176Z" transform="translate(-1007.374 -1963.238)" fill="#bc1e1e"/>
                <path id="Path_4594" data-name="Path 4594" d="M1020.227,1978.648Z" transform="translate(-1007.374 -1965.134)" fill="#ffdb31"/>
                <path id="Path_4595" data-name="Path 4595" d="M1020.227,1983.81l7.943,5.771-7.943-10.933Z" transform="translate(-1007.374 -1965.134)" fill="#930902"/>
                <path id="Path_4596" data-name="Path 4596" d="M1016.621,1978.648l-4.909,1.595-3.034,9.338,7.944-10.933Z" transform="translate(-1003.768 -1965.134)" fill="#bc1e1e"/>
                <path id="Path_4597" data-name="Path 4597" d="M1015.815,1968.338l3.034,4.176V1959Z" transform="translate(-1005.997 -1959)" fill="#bc1e1e"/>
                <path id="Path_4598" data-name="Path 4598" d="M1020.227,1959v13.514l3.034-4.176Z" transform="translate(-1007.374 -1959)" fill="#8e0909"/>
                <path id="Path_4599" data-name="Path 4599" d="M1014.393,1976.752l-12.853-4.176,7.943,5.771,4.909-1.595Z" transform="translate(-1001.54 -1963.238)" fill="#9b2400"/>
                <path id="Path_4600" data-name="Path 4600" d="M1020.227,1976.752l4.909,1.595,7.944-5.771-12.853,4.176Z" transform="translate(-1007.374 -1963.238)" fill="#930902"/>
                <path id="Path_4601" data-name="Path 4601" d="M1020.227,1978.648Z" transform="translate(-1007.374 -1965.134)" fill="#ffdb31"/>
                <path id="Path_4602" data-name="Path 4602" d="M1020.227,1978.648Z" transform="translate(-1007.374 -1965.134)" fill="#ffdb31"/>
              </g>
              <g id="Group_3619" data-name="Group 3619" transform="translate(843.166 1962.259)">
                <path id="Path_4603" data-name="Path 4603" d="M849.669,1979.993h-6.5l8.514,2.766Z" transform="translate(-843.166 -1973.807)" fill="#8e0909"/>
                <path id="Path_4604" data-name="Path 4604" d="M855.544,1984.015Z" transform="translate(-847.03 -1975.063)" fill="#ffdb31"/>
                <path id="Path_4605" data-name="Path 4605" d="M855.544,1984.015h0l5.261,7.242-2.01-6.185Z" transform="translate(-847.03 -1975.063)" fill="#bc1e1e"/>
                <path id="Path_4606" data-name="Path 4606" d="M847.893,1991.256l5.262-3.823v-3.419Z" transform="translate(-844.642 -1975.063)" fill="#bc1e1e"/>
                <path id="Path_4607" data-name="Path 4607" d="M864.057,1979.993h-6.5l-2.01,2.766Z" transform="translate(-847.03 -1973.807)" fill="#bc1e1e"/>
                <path id="Path_4608" data-name="Path 4608" d="M855.544,1984.015Z" transform="translate(-847.03 -1975.063)" fill="#ffdb31"/>
                <path id="Path_4609" data-name="Path 4609" d="M855.544,1987.433l5.261,3.823-5.261-7.242Z" transform="translate(-847.03 -1975.063)" fill="#930902"/>
                <path id="Path_4610" data-name="Path 4610" d="M853.155,1984.015l-3.252,1.056-2.01,6.185,5.262-7.242Z" transform="translate(-844.642 -1975.063)" fill="#bc1e1e"/>
                <path id="Path_4611" data-name="Path 4611" d="M852.621,1977.185l2.01,2.766V1971Z" transform="translate(-846.118 -1971)" fill="#bc1e1e"/>
                <path id="Path_4612" data-name="Path 4612" d="M855.544,1971v8.952l2.01-2.766Z" transform="translate(-847.03 -1971)" fill="#8e0909"/>
                <path id="Path_4613" data-name="Path 4613" d="M851.679,1982.759l-8.514-2.766,5.262,3.823,3.252-1.056Z" transform="translate(-843.166 -1973.807)" fill="#9b2400"/>
                <path id="Path_4614" data-name="Path 4614" d="M855.544,1982.759l3.252,1.056,5.262-3.823-8.514,2.766Z" transform="translate(-847.03 -1973.807)" fill="#930902"/>
                <path id="Path_4615" data-name="Path 4615" d="M855.544,1984.015Z" transform="translate(-847.03 -1975.063)" fill="#ffdb31"/>
                <path id="Path_4616" data-name="Path 4616" d="M855.544,1984.015Z" transform="translate(-847.03 -1975.063)" fill="#ffdb31"/>
              </g>
              <g id="Group_3620" data-name="Group 3620" transform="translate(987.08 1962.259)">
                <path id="Path_4617" data-name="Path 4617" d="M1058.9,1979.993h-6.5l8.513,2.766Z" transform="translate(-1052.399 -1973.807)" fill="#8e0909"/>
                <path id="Path_4618" data-name="Path 4618" d="M1064.777,1984.015Z" transform="translate(-1056.263 -1975.063)" fill="#ffdb31"/>
                <path id="Path_4619" data-name="Path 4619" d="M1064.777,1984.015h0l5.261,7.242-2.01-6.185Z" transform="translate(-1056.263 -1975.063)" fill="#bc1e1e"/>
                <path id="Path_4620" data-name="Path 4620" d="M1057.127,1991.256l5.262-3.823v-3.419Z" transform="translate(-1053.875 -1975.063)" fill="#bc1e1e"/>
                <path id="Path_4621" data-name="Path 4621" d="M1073.29,1979.993h-6.5l-2.01,2.766Z" transform="translate(-1056.263 -1973.807)" fill="#bc1e1e"/>
                <path id="Path_4622" data-name="Path 4622" d="M1064.777,1984.015Z" transform="translate(-1056.263 -1975.063)" fill="#ffdb31"/>
                <path id="Path_4623" data-name="Path 4623" d="M1064.777,1987.433l5.261,3.823-5.261-7.242Z" transform="translate(-1056.263 -1975.063)" fill="#930902"/>
                <path id="Path_4624" data-name="Path 4624" d="M1062.389,1984.015l-3.252,1.056-2.01,6.185,5.262-7.242Z" transform="translate(-1053.875 -1975.063)" fill="#bc1e1e"/>
                <path id="Path_4625" data-name="Path 4625" d="M1061.855,1977.185l2.01,2.766V1971Z" transform="translate(-1055.351 -1971)" fill="#bc1e1e"/>
                <path id="Path_4626" data-name="Path 4626" d="M1064.777,1971v8.952l2.01-2.766Z" transform="translate(-1056.263 -1971)" fill="#8e0909"/>
                <path id="Path_4627" data-name="Path 4627" d="M1060.913,1982.759l-8.513-2.766,5.262,3.823,3.252-1.056Z" transform="translate(-1052.399 -1973.807)" fill="#9b2400"/>
                <path id="Path_4628" data-name="Path 4628" d="M1064.777,1982.759l3.252,1.056,5.262-3.823-8.514,2.766Z" transform="translate(-1056.263 -1973.807)" fill="#930902"/>
                <path id="Path_4629" data-name="Path 4629" d="M1064.777,1984.015Z" transform="translate(-1056.263 -1975.063)" fill="#ffdb31"/>
                <path id="Path_4630" data-name="Path 4630" d="M1064.777,1984.015Z" transform="translate(-1056.263 -1975.063)" fill="#ffdb31"/>
              </g>
            </g>
          </svg>
        break;
        case "1star":
            return <svg fill={color} width={size} height={size} style={style}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.072 40.014">
            <g id="Group_3698" data-name="Group 3698" transform="translate(-736.062 -12958)">
              <path id="Path_4888" data-name="Path 4888" d="M752.132,12977.688h-16.07l21.036,6.836Z" transform="translate(0 -4.404)" fill="#8e0909"/>
              <path id="Path_4889" data-name="Path 4889" d="M763.16,12986.493Z" transform="translate(-6.062 -6.374)" fill="#ffdb31"/>
              <path id="Path_4890" data-name="Path 4890" d="M763.16,12986.493h0l13,17.895-4.966-15.285Z" transform="translate(-6.062 -6.374)" fill="#bc1e1e"/>
              <path id="Path_4891" data-name="Path 4891" d="M746.412,13004.388l13-9.447v-8.447Z" transform="translate(-2.315 -6.374)" fill="#bc1e1e"/>
              <path id="Path_4892" data-name="Path 4892" d="M784.2,12977.688h-16.07l-4.966,6.836Z" transform="translate(-6.062 -4.404)" fill="#bc1e1e"/>
              <path id="Path_4893" data-name="Path 4893" d="M763.16,12986.493Z" transform="translate(-6.062 -6.374)" fill="#ffdb31"/>
              <path id="Path_4894" data-name="Path 4894" d="M763.16,12994.94l13,9.447-13-17.895Z" transform="translate(-6.062 -6.374)" fill="#930902"/>
              <path id="Path_4895" data-name="Path 4895" d="M759.413,12986.493l-8.035,2.609-4.966,15.285,13-17.895Z" transform="translate(-2.315 -6.374)" fill="#bc1e1e"/>
              <path id="Path_4896" data-name="Path 4896" d="M756.763,12973.283l4.966,6.836V12958Z" transform="translate(-4.631)" fill="#bc1e1e"/>
              <path id="Path_4897" data-name="Path 4897" d="M763.16,12958v22.119l4.966-6.836Z" transform="translate(-6.062)" fill="#8e0909"/>
              <path id="Path_4898" data-name="Path 4898" d="M757.1,12984.523l-21.036-6.836,13,9.445,8.035-2.609Z" transform="translate(0 -4.404)" fill="#9b2400"/>
              <path id="Path_4899" data-name="Path 4899" d="M763.16,12984.523l8.035,2.609,13-9.445-21.036,6.836Z" transform="translate(-6.062 -4.404)" fill="#930902"/>
              <path id="Path_4900" data-name="Path 4900" d="M763.16,12986.493Z" transform="translate(-6.062 -6.374)" fill="#ffdb31"/>
              <path id="Path_4901" data-name="Path 4901" d="M763.16,12986.493Z" transform="translate(-6.062 -6.374)" fill="#ffdb31"/>
            </g>
          </svg>
        break;
        case "zalo":
          return zalo;
        break;
        case "facebookz":
          return facebook;
        break;
        case "call":
          return call;
        break;
    }
}
export function get_star(score=5,size=15){
  let rs=[];
  let q=<span className={'star-z'}><svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M329.6 176H488C498.3 176 507.4 182.5 510.7 192.2C514 201.9 510.8 212.6 502.7 218.9L371.9 320.7L422.9 480.7C426.1 490.7 422.4 501.7 413.7 507.7C405.1 513.7 393.6 513.4 385.3 506.9L256 406.4L126.7 506.9C118.4 513.4 106.9 513.7 98.27 507.7C89.65 501.7 85.94 490.7 89.13 480.7L140.1 320.7L9.267 218.9C1.174 212.6-2.027 201.9 1.3 192.2C4.628 182.5 13.75 176 24 176H182.5L233.1 16.72C236.3 6.764 245.6 0 256 0C266.5 0 275.7 6.764 278.9 16.72L329.6 176z"/></svg></span>;
  let w= <span className={'star-z'}>
  <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M329.6 176H488C498.3 176 507.4 182.5 510.7 192.2C514 201.9 510.8 212.6 502.7 218.9L371.9 320.7L422.9 480.7C426.1 490.7 422.4 501.7 413.7 507.7C405.1 513.7 393.6 513.4 385.3 506.9L256 406.4L126.7 506.9C118.4 513.4 106.9 513.7 98.27 507.7C89.65 501.7 85.94 490.7 89.13 480.7L140.1 320.7L9.267 218.9C1.174 212.6-2.027 201.9 1.3 192.2C4.628 182.5 13.75 176 24 176H182.5L233.1 16.72C236.3 6.764 245.6 0 256 0C266.5 0 275.7 6.764 278.9 16.72L329.6 176zM256 352C261.2 352 266.4 353.7 270.7 357.1L353.7 421.6L321.1 319.3C318.1 309.7 321.3 299.2 329.3 293.1L418.1 223.1H312C301.5 223.1 292.3 217.2 289.1 207.3L256 103.2L256 352z"/></svg></span>;
  let e=<span className={'star-z'}><svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M230.3 18.77C233.9 7.592 244.3 0 256 0C267.7 0 278.1 7.592 281.7 18.77L331.7 176H485.4C500.1 176 512 187.9 512 202.6C512 211.1 507.9 219.1 500.1 224.1L370.6 318.3L421.4 485.2C425.5 498.6 415.5 512 401.6 512C397 512 392.5 510.5 388.9 507.6L256 404.3L123.1 507.6C119.5 510.5 114.1 512 110.4 512C96.46 512 86.5 498.6 90.55 485.2L141.4 318.3L11.02 224.1C4.1 219.1 0 211.1 0 202.6C0 187.9 11.9 176 26.59 176H180.3L230.3 18.77zM256 43.63L207.2 196.9C205.1 203.5 198.1 208 192 208H43.33L169.4 299C174.9 303 177.3 310.1 175.3 316.7L131.5 460.6L246.2 371.4C251.1 366.9 260 366.9 265.8 371.4L380.5 460.6L336.7 316.7C334.7 310.1 337.1 303 342.6 299L468.7 208H320C313 208 306.9 203.5 304.8 196.9L256 43.63z"/></svg></span>;
  if(score==0){
      rs.push(e);rs.push(e);rs.push(e);rs.push(e);rs.push(e);
  }
  if(score>0&&score<1){
      rs.push(w);rs.push(e);rs.push(e);rs.push(e);rs.push(e);
  }
  if(score==1){
      rs.push(q);rs.push(e);rs.push(e);rs.push(e);rs.push(e);
  }
  if(score>1&&score<2){
      rs.push(q);rs.push(w);rs.push(e);rs.push(e);rs.push(e);
  }
  if(score==2){
      rs.push(q);rs.push(q);rs.push(e);rs.push(e);rs.push(e);
  }
  if(score>2&&score<3){
      rs.push(q);rs.push(q);rs.push(w);rs.push(e);rs.push(e);
  }
  if(score==3){
      rs.push(q);rs.push(q);rs.push(q);rs.push(e);rs.push(e);
  }
  if(score>3&&score<4){
      rs.push(q);rs.push(q);rs.push(q);rs.push(w);rs.push(e);
  }
  if(score==4){
      rs.push(q);rs.push(q);rs.push(q);rs.push(q);rs.push(e);
  }
  if(score>4&&score<5){
      rs.push(q);rs.push(q);rs.push(q);rs.push(q);rs.push(w);
  }
  if(score==5){
      rs.push(q);rs.push(q);rs.push(q);rs.push(q);rs.push(q);
  }
  if(score>5){
      rs.push(q);rs.push(q);rs.push(q);rs.push(q);rs.push(q);
  }
  return rs;
}