; ModuleID = 'probe4.fee5f530-cgu.0'
source_filename = "probe4.fee5f530-cgu.0"
target datalayout = "e-m:e-p:32:32-Fi8-i64:64-v128:64:128-a:0:32-n32-S64"
target triple = "thumbv6m-none-unknown-eabi"

; probe4::probe
; Function Attrs: nounwind
define dso_local void @_ZN6probe45probe17h65dd259bb56dd175E() unnamed_addr #0 {
start:
  %0 = alloca i32, align 4
  store i32 -2147483648, ptr %0, align 4
  %1 = load i32, ptr %0, align 4
  br label %bb1

bb1:                                              ; preds = %start
  ret void
}

; Function Attrs: nocallback nofree nosync nounwind readnone speculatable willreturn
declare i32 @llvm.bitreverse.i32(i32) #1

attributes #0 = { nounwind "frame-pointer"="all" "target-cpu"="generic" "target-features"="+strict-align,+atomics-32" }
attributes #1 = { nocallback nofree nosync nounwind readnone speculatable willreturn }
